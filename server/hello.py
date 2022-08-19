from unicodedata import name
from flask import Flask, request
from flask_cors import CORS
import os
from faceDection import predictEmotion
from enum import Enum

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = './images'
CORS(app)

@app.route('/',methods=['POST'])
def hello_world():
    
    file = request.files.get('photo')
    target = os.path.join(app.config['UPLOAD_FOLDER'], 'test')
    if not os.path.isdir(target):
        os.mkdir(target)
    filename = file.filename
    destination = "/".join([target, filename])
    file.save(destination)
    # result = predictEmotion('rn_image_picker_lib_temp_525df671-bfc2-4591-8765-a1fbd648be50.jpg')
    result = predictEmotion(filename)

    return result

if __name__ == '__main__':
    app.run(host='0.0.0.0', port= '8080')
