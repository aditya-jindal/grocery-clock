import google.generativeai as genai
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
CORS(app)

genai.configure(api_key=os.getenv('GOOGLE_API_KEY_ADITYA'))


@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"message": 'No file part'})
    file = request.files['file']
    if file.filename == '':
        return jsonify({"message": 'No file selected'})

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(filename))
        img = Image.open(filename)
        system_prompt = '''
        You are expert at understanding grocery invoices. You will recieve input images
        as invoices and will have to return an array of dictionaries containing the name of the grocery,
        along with it's shelf life in days when kept outside the refrigerator. Make sure that you convert groceery names
        from abbreviations to plain simple english. If you're unsure of an abbreviation just ignore the item entirely.
        The output should be an array in the format:
        [
            {
                name: "cauliflower",
                shelfLife: 7,
            },
            {
                name: "potato",
                shelfLife: 21,
            },
        ]
        Don't repond with anything other than this format.
        '''
        model = genai.GenerativeModel("gemini-pro-vision")
        response = model.generate_content([system_prompt, img])
        ans = response.text
        print(ans)
        return jsonify(ans)


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in {'jpg', 'png', 'jpeg'}


if __name__ == '__main__':
    app.run(debug=True)
