import cv2
import face_recognition
from keras.models import load_model

imagePath = "abba.png"
face_detection = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
emotion_model_path = 'haarcascade_frontalface_default.xml'
EMOTIONS = ["angry" ,"disgust","scared", "happy", "sad", "surprised", "neutral"]
# image = cv2.imread(imagePath)
# gray = cv2.cvtColor(image,cv2.COLOR_BGR2GRAY)

imgelon = face_recognition.load_image_file('abba.png')
# emotion_classifier = load_model(emotion_model_path, compile=False)
gray = cv2.cvtColor(imgelon,cv2.COLOR_BGR2GRAY)
#----------Finding face Location for drawing bounding boxes-------

face = face_recognition.face_locations(imgelon)[0]
copy = imgelon.copy()
(fX,fY,fW,fH) = face
#-------------------Drawing the Rectangle-------------------------
cv2.rectangle(copy, (face[3], face[0]),(face[1], face[2]), (255,0,255), 2)
roi = gray[fY:fY + fH, fX:fX + fW]
print(roi)
# roi = cv2.resize(roi, (64, 64))
# roi = roi.astype("float") / 255.0
# roi = img_to_array(roi)
# roi = np.expand_dims(roi, axis=0)


# preds = emotion_classifier.predict(roi)[0]
# emotion_probability = np.max(preds)
# label = EMOTIONS[preds.argmax()]


cv2.imshow('copy', copy)
# cv2.imshow('elon',imgelon)
cv2.waitKey(0)