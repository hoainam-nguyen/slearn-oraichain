import io
import codecs
import numpy as np
from scipy.spatial.distance import pdist
from scipy.cluster.hierarchy import linkage, fcluster
from PIL import Image


def base64_to_image(byte64_str: str, grayscale: bool = False):
    bytearr = codecs.decode(codecs.encode(byte64_str, encoding="ascii"), encoding="base64")

    if grayscale:
        return Image.open(io.BytesIO(bytearr)).convert("L")

    return Image.open(io.BytesIO(bytearr)).convert("RGB")


def sort_bounding_boxes(bounding_boxes, threshold=20):
    # Tính toán khoảng cách giữa các bounding box dựa trên tọa độ y
    dist = pdist(np.array([[b[1], b[3]] for b in bounding_boxes]))
    
    # Sử dụng thuật toán hierarchical clustering để gom nhóm các bounding box lại với nhau
    linkage_matrix = linkage(dist, 'single')
    clusters = fcluster(linkage_matrix, threshold, criterion='distance')
    
    # Tạo danh sách các nhóm bounding box
    groups = {}
    for i, c in enumerate(clusters):
        if c not in groups:
            groups[c] = []
        groups[c].append(bounding_boxes[i])
    
    # Sắp xếp các bounding box trong mỗi nhóm theo thứ tự từ trái sang phải
    for group in groups.values():
        group.sort(key=lambda b: b[0])
    
    # Sắp xếp các nhóm theo thứ tự từ trên xuống dưới của ảnh
    groups = sorted(groups.values(), key=lambda g: g[0][1])
    
    return groups


