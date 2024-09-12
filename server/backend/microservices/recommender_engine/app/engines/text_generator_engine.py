import pandas as pd
import numpy as np

import spacy
import random

from nltk.tokenize import sent_tokenize
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

# Load SpaCy and NLTK data (download if necessary)
# nltk.download('punkt')

# Load models
nlp = spacy.load("en_core_web_sm")
tokenizer = AutoTokenizer.from_pretrained("AryanLala/autonlp-Scientific_Title_Generator-34558227")
model = AutoModelForSeq2SeqLM.from_pretrained("AryanLala/autonlp-Scientific_Title_Generator-34558227")

# --- Helper Functions ---
def get_sentence_starters():
    return ["Furthermore,", "Additionally,", "In addition,", "On top of that,", "To add to that,", "Next,", "Afterwards"]


def improve_fluency(summaries):
    processed_summaries = []
    for i, summary in enumerate(summaries):
        sentences = sent_tokenize(summary)
        for j, sentence in enumerate(sentences):
            sentence = sentence.capitalize()
            if j == 0 and i > 0:  # Add a transition at the start of a new summary
                transition = random.choice(get_sentence_starters())
                sentence = f"{transition} {sentence}"
            processed_summaries.append(sentence)
    return ''.join(processed_summaries)


def combine_summaries(group):
    combined_summary = improve_fluency(group['summary'])
    return combined_summary


def generate_title_bart(combined_summary):
    input_text = f"First Day: {combined_summary}"
    input_ids = tokenizer.encode(input_text, return_tensors="pt", max_length=512, truncation=True)
    outputs = model.generate(input_ids, max_length=64, num_beams=4, early_stopping=True)
    title = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return title


def generate_final_output_with_titles(final_summaries):
    day_strings = []
    for index, row in final_summaries.iterrows():
        day_number = row['day']
        combined_summary = row['combined_summary']
        title = generate_title_bart(combined_summary)
        day_string = f"Day {day_number}: {title}\n{combined_summary}\n"
        day_strings.append(day_string)
    return ''.join(day_strings)


# --- Main Function ---
def generate_text(data_df, num_days=2):
    # Assign Places to Days
    num_places = len(data_df)
    days = np.arange(1, num_days + 1)

    data_df['day'] = np.random.choice(days, size=num_places, replace=True)
    places_per_day = num_places // num_days
    day_assignment = np.repeat(days, places_per_day)

    remaining_places = num_places % num_days
    
    if remaining_places > 0:
        extra_places_day = np.random.choice(days, size=remaining_places, replace=False)
        day_assignment = np.concatenate((day_assignment, extra_places_day))

    np.random.shuffle(day_assignment)
    data_df['day'] = day_assignment

    filtered_data = pd.concat([data_df[data_df['day'] == day].sample(n=int(10 / num_days), replace=True) for day in days])

    # Combine and Improve Summaries
    final_summaries = filtered_data.groupby('day').apply(combine_summaries).reset_index()
    final_summaries.columns = ['day', 'combined_summary']

    # Generate Titles and Final Output
    final_output = generate_final_output_with_titles(final_summaries)
    return final_output
