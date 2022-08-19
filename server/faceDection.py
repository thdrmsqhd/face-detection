import cv2
from keras.models import load_model
from keras.utils import img_to_array
import numpy as np
import os

def predictEmotion(imgFileName):
    EMOTIONS = ["angry" ,"disgust", "scared", "happy", "sad", "surprised", "neutral"]
    emotion_model_path = 'files/emotion_model.hdf5'
    emotion_classifier = load_model(emotion_model_path, compile=False)
    cascade = cv2.CascadeClassifier(os.path.join(cv2.data.haarcascades, 'haarcascade_frontalface_alt.xml'))
    # fileName = 'rn_image_picker_lib_temp_525df671-bfc2-4591-8765-a1fbd648be50.jpg'
    filePath = os.path.join(os.path.abspath('./images/test/'), imgFileName)
    fileImg = cv2.imread(filePath)
    gray = cv2.cvtColor(fileImg, cv2.COLOR_BGR2GRAY)
    result = cascade.detectMultiScale(gray, scaleFactor= 1.5, minNeighbors=5, minSize=(20,20))
    for box in result:
        fX, fY, fW, fH = box
        cv2.rectangle(gray, (fX,fY), (fX+fW, fY+fH), (255,0,255), thickness=2)

    roi = gray[fY:fY + fH, fX:fX + fW]
    roi = cv2.resize(roi, (64, 64))
    roi = roi.astype("float") / 255.0
    roi = img_to_array(roi)
    roi = np.expand_dims(roi, axis=0)

    preds = emotion_classifier.predict(roi)[0]
    emotion_probability = np.max(preds)
    label = EMOTIONS[preds.argmax()]
    return {'per' : str(emotion_probability*100)[:5] + '%', 'emotion' : label}


# print(predictEmotion('rn_image_picker_lib_temp_525df671-bfc2-4591-8765-a1fbd648be50.jpg'))