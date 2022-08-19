from keras.models import load_model
from keras.utils import img_to_array
import numpy as np

def predict_disease(image_path):
    image_array = convert_image_to_array(image_path)
    np_image = np.array(image_array, dtype=np.float16) / 225.0
    np_image = np.expand_dims(np_image, 0)
    result = keras_model_best.predict(np_image)
    result_top = np.argmax(keras_model_best.predict(np_image), axis=1)
    print("Top prob. : {0:.6f}%".format(result[0, result_top][0] * 100))
    print("Top prob._label : {}".format(label_binarizer.classes_[result_top][0]))