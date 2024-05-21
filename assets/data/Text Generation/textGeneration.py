from transformers import BartForConditionalGeneration, BartTokenizer

# Load Bart model and tokenizer
model_name = "facebook/bart-base"
tokenizer = BartTokenizer.from_pretrained(model_name)
model = BartForConditionalGeneration.from_pretrained(model_name)

def generate_text(input_text, place, descsex):
    """
    Generates a travel description for a given place based on the input text.

    Args:
        input_text: String, the introductory text about the travel experience.
        place: String, the name of the place to generate a description for.
        descsex: String, the existing description of the place.

    Returns:
        String, the generated travel description for the place.
    """
    # Combine input text, existing description, and place name into a prompt
    prompt = f"{input_text} {descsex} Let's explore {place}. What can we expect there?"

    # Tokenize the prompt
    input_ids = tokenizer.encode(prompt, return_tensors="pt")

    # Generate text with Bart
    output = model.generate(
        input_ids=input_ids,
        max_length=300,  # Adjust max_length for desired description length
        num_beams=2,  # Reduce beams for efficiency
        no_repeat_ngram_size=2,
        early_stopping=True
    )

    # Decode the generated output
    generated_text = tokenizer.decode(output[0], skip_special_tokens=True)
    return generated_text

# Example usage
input_text = "Are you ready to travel through time while the mysterious streets of Istanbul blend history and modernity? Immerse yourself in this enchanting city for a day."
descsex="""Welcome to Sultanahmet Mosque, one of Istanbul's most iconic landmarks! Commonly known as the Blue Mosque for its exquisite blue tiles adorning its interior, this architectural masterpiece stands as a symbol of Istanbul's rich history and cultural heritage.
As you step into the courtyard, you'll be greeted by its grandeur, with towering minarets framing the expansive central dome. Built in the early 17th century during the reign of Sultan Ahmed I, this marvel of Ottoman architecture seamlessly blends traditional Islamic elements with Byzantine influences.
Once inside, prepare to be captivated by the mosque's intricate tilework, ornate calligraphy, and breathtaking stained glass windows. The main prayer hall boasts a stunning array of over 20,000 hand-painted blue tiles, giving the mosque its famed nickname.
Take a moment to admire the impressive architectural details, from the cascading domes and semi-domes to the finely carved marble columns and delicate arabesque motifs. As you explore further, you'll discover the tranquil atmosphere and spiritual serenity that permeate this sacred space.
Outside, don't miss the chance to stroll through the peaceful courtyard, where lush gardens and tranquil fountains provide a serene escape from the bustling city streets. Whether you're here for prayer, contemplation, or simply to marvel at its beauty, Sultanahmet Mosque offers a truly unforgettable experience for visitors from around the world.
"""
place = "Sultanahmet Mosque"
generated_text = generate_text(input_text, place, descsex)
print(generated_text)