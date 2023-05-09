from ultralytics import YOLO

class TextDetectionYOLOv8:
    def __init__(self, model_path: str, threshold: float):
        self.model_path = model_path
        self.model = self._load_model()
        self.threshold = threshold
    
    def _load_model(self):
        try:
            model = YOLO(self.model_path)
            return model
        except Exception as e:
            return None 
    
    def predict(self, image0):
        if not self.model:
            return None 
        
        raw_information_predict = self.model.predict(source=image0, conf=self.threshold)
        boxes = [coordinate[0].cpu().numpy().astype(int) for coordinate in zip(raw_information_predict[0].boxes.xyxy)]
        boxes = [[int(i) for i in a] for a in boxes]
        return boxes
    


