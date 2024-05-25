import pandas as pd
import torch
from transformers import T5Tokenizer, T5ForConditionalGeneration
from tqdm import tqdm
import logging
import spacy

# Load SpaCy model for grammar correction
nlp = spacy.load("en_core_web_sm")

# Function to normalize Turkish characters
def normalize_turkish_chars(text):
    replacements = {
        "ı": "i", "İ": "I", "ö": "o", "Ö": "O", "ç": "c", "Ç": "C",
        "ü": "u", "Ü": "U", "ğ": "g", "Ğ": "G", "ş": "s", "Ş": "S"
    }
    return "".join([replacements.get(c, c) for c in text])

# Function to correct grammar
def correct_grammar(text):
    doc = nlp(text)
    corrected_text = " ".join([token.text if token.tag_ != "VBZ" or token.dep_ != "ROOT" else token.lemma_ for token in doc])
    return corrected_text

# Check CUDA availability
print(torch.version.cuda)
print(torch.cuda.is_available())

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Load data
data_df = pd.read_excel("whole_data_cleaned.xlsx")
data_df.drop(["rating", "tags", "website", "place_links", "territory_id", "locationYX"], axis=1, inplace=True)

# Check for GPU availability and set the device accordingly
if torch.cuda.is_available():
    logging.info("Using GPU for summarization.")
    device = torch.device("cuda")
else:
    logging.info("Using CPU for summarization. This might be slower.")
    device = torch.device("cpu")

# Model and Tokenizer
model_name = 't5-large'
tokenizer = T5Tokenizer.from_pretrained(model_name)
model = T5ForConditionalGeneration.from_pretrained(model_name)
model.to(device)

# Batch Summarization
def generate_summaries(descriptions, batch_size=4):
    summaries = []
    for i in tqdm(range(0, len(descriptions), batch_size), desc="Summarizing Descriptions"):
        batch = descriptions[i: i + batch_size]

        try:
            # Prepare inputs and move to device
            input_ids = tokenizer(
                ["summarize: " + desc for desc in batch],
                return_tensors="pt",
                padding=True,
                truncation=True,
                max_length=512 
            ).input_ids.to(device)

            # Generate summaries
            output_ids = model.generate(
                input_ids=input_ids,
                max_length=100,
                min_length=50,
                length_penalty=2.0,
                num_beams=4,
                early_stopping=True
            )
            summaries.extend([tokenizer.decode(ids, skip_special_tokens=True) for ids in output_ids])

        except Exception as e:
            logging.error(f"Error processing batch starting at index {i}: {e}")
            summaries.extend([""] * len(batch))

    return summaries

# Preprocess descriptions
data_df['description'] = data_df['description'].astype(str).apply(normalize_turkish_chars).apply(correct_grammar)

# Apply batch summarization
data_df['summary'] = generate_summaries(data_df['description'].tolist())

# Print and Save
print(data_df)
data_df.to_csv("id_summarized_data.csv", index=False)
data_df.to_excel("id_summarized_data.xlsx", index=False)
data_df.to_json("id_summarized_data.json", orient="records")
