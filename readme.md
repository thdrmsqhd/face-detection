pythom 3.11
node 16.15.1

flask
reactnative
openCV

# Download Face detection XML 
curl -L -o ./files/haarcascade_frontalface_default.xml https://raw.githubusercontent.com/opencv/opencv/master/data/haarcascades/haarcascade_frontalface_default.xml
# Download emotion trained data
curl -L -o ./files/emotion_model.hdf5 https://mechasolution.vn/source/blog/AI-tutorial/Emotion_Recognition/emotion_model.hdf5


필요 패키지
pip install flask tensorflow keras opencv-python numpy

haarcascade_frontalface_default
https://github.com/opencv/opencv/tree/master/data/haarcascades

emotion_model.hdf5
https://github.com/jinhojang6/ai-powered-detection/blob/master/detection_processing/models/emotion_model.hdf5