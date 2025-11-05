---
author: khongai
ogImage: /public/assets/2025/10/26/0_intro_ml2.png
pubDatetime: 2025-10-26T15:22:00Z
modDatetime: 2025-10-26T16:52:45.934Z
title: AI 101 - Phần 2, Đào sâu ML bằng cách tìm hiểu một số thuật toán ML cơ bản và lập trình một số ví dụ cụ thể
slug: ai-101-phan2-thu-tim-hieu-ve-ml-va-viet-mot-so-chuong-trinh-ml-co-ban
featured: false
draft: false
tags:
  - AI
description:
  Bài viết này chúng ta sẽ cùng nhau làm tìm hiểu một số thuật toán ML cơ bản.
---

>Không phải là AI/ML Engineer nhưng vốn là người “đã từng học lập trình” tôi hiểu không có gì giúp hiểu nhanh bằng việc nhảy vào code một ví dụ cụ thể. Do vậy tôi nghĩ với  mỗi nhóm thuật toán AI/ML/DL tôi sẽ làm ví dụ với một thuật toán đơn giản nhất để hiểu code thực tế nó chạy thế nào..


## Table of contents

# Một số thuật toán ML cơ bản 

Số lượng thuật toán Machine Learning rất đa dạng, ở đây chỉ xin minh họa bằng một sơ đồ đơn giản thể hiện “đại gia đình” của các thuật toán này.


![ml algo](/assets/2025/10/26/0_intro_ml2.png)


# Supervised Learning với Hồi quy tuyến tính (Linear Regression) - Thuật toán đơn giản nhất

>(Hồi quy tuyến tính - Nghĩa tiếng việt “hồi quy” có nghĩa là cùng một xu hướng, tuyến tính nghĩa là mối quan hệ tỉ lệ thuận). 

## Giới thiệu bài toán

**Bài toán quen thuộc:** Dự đoán giá nhà (y) dựa trên diện tích nhà (x). Dễ thấy rằng trong thực tế cùng một địa điểm thì diện tích tăng → giá nhà tăng & giá nhà là giá trị liên tục nên đây có thể xem là là bài toán **Linear Regression**

* Đầu vào (Input): Tập (x,y) với x là m2, và y là giá. 
* Đầu ra (Output): Với x  → dự đoán y

## Mô hình toán học (công thức biểu diễn mối quan hệ)

Mô hình toán học chung cho bài toán hồi quy tuyến thính

```mathematica
$$
\hat{y} = w \cdot x + b
$$
```

```mathematica
x : Đầu vào (input, ví dụ: diện tích nhà)
\hat{y}: Đầu ra (dự đoán, ví dụ: giá nhà)
w: Hệ số (độ dốc đường thẳng)
b: Hằng số chệch (điểm cắt trục tung)
```

Vẽ lên nó là đường thẳng

![image.png](attachment:382ca3e1-07b3-4e9c-8e5b-12fa124b0c55:image.png)

## Hàm mục tiêu (Loss function)

Ở hình vẽ trên ta thấy các doạn màu xanh (nối từ chấm tròn tới đường nét đứt) chính là sai số giữa giá trị thực tế và ước lượng.

Dùng **Mean Squared Error (MSE)** để đo sai số giữa dự đoán và thực tế:

```mathematica
[
J(w,b) = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y_i})^2
]
```

**→ Mục tiêu:** tìm w, b sao cho J nhỏ nhất <=> **Ta nhận thấy rằng các bài toán ML về cơ bản là đi tìm giá trị để hàm mục tiêu nhỏ nhất**

## Cách học - Quá trình học

Trong toán học các bài toán này thực ra có nhiều cách giải. "Đọc qua" (vì tôi không có nhu cầu đi sâu về toán) tôi thấy người ta có 2 phương pháp chính là:

Sau khi tìm được cách giải bài toán này ta đi vào implement chúng diễn dải dưới dạng code mà thôi (Thật ra là có lib họ viết sẵn hết rồi).

### Code lập trình

Trước khi cài đặt chương trình bằng python ta cần giới thiệu khái niệm tập train và tập test. Dữ liệu ban đầu thường được tách thành 2 tập train và test. 

* Tập train (Training set): Là phần dữ liệu được dùng để huấn luyện mô hình.

Mục tiêu: để mô hình “học” được mối quan hệ giữa các đặc trưng (features) và nhãn (labels).

* Tập test (Testing set): Là phần dữ liệu tách riêng ra, không dùng để huấn luyện, mà chỉ dùng để kiểm tra xem mô hình học được có tốt không.

Mục tiêu: đánh giá độ chính xác (accuracy), sai số (error), khả năng dự đoán của mô hình trên dữ liệu mới chưa từng thấy.

*Nếu bạn dùng cùng một dữ liệu để vừa train vừa test, mô hình sẽ dễ bị “học vẹt” (overfitting), tức là chỉ nhớ dữ liệu cũ mà không tổng quát được với dữ liệu mới*



```python
# =====================================================
# 1️⃣ Import thư viện
# =====================================================
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt

# =====================================================
# 2️⃣ Tạo dữ liệu mẫu
# =====================================================
# x: diện tích nhà (m2)
# y: giá nhà (tỷ VNĐ)
x = np.array([50, 60, 70, 80, 90, 100, 120, 150]).reshape(-1, 1)
y = np.array([1.6, 1.9, 2.2, 2.6, 3.0, 3.4, 4.0, 5.0])

# =====================================================
# 3️⃣ Chia dữ liệu train/test
# =====================================================
X_train, X_test, y_train, y_test = train_test_split(
    x, y, test_size=0.25, random_state=42
)

# =====================================================
# 4️⃣ Huấn luyện mô hình Linear Regression
# =====================================================
model = LinearRegression()
model.fit(X_train, y_train)

# Hệ số w và b mô hình học được
w = model.coef_[0]
b = model.intercept_

print(f"Hệ số w (độ dốc): {w:.4f}")
print(f"Hệ số b (chệch): {b:.4f}")

# =====================================================
# 5️⃣ Dự đoán và đánh giá
# =====================================================
y_pred = model.predict(X_test)
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"\nSai số trung bình bình phương (MSE): {mse:.4f}")
print(f"Hệ số xác định R²: {r2:.4f}")

# =====================================================
# 6️⃣ Vẽ biểu đồ
# =====================================================
plt.scatter(x, y, color='blue', label='Dữ liệu thực tế')       # Các điểm dữ liệu thật
plt.plot(x, model.predict(x), color='red', label='Đường hồi quy')  # Đường thẳng dự đoán
plt.xlabel('Diện tích (m²)')
plt.ylabel('Giá nhà (tỷ VNĐ)')
plt.title('Bài toán Hồi quy tuyến tính - Dự đoán giá nhà')
plt.legend()
plt.show()

# =====================================================
# 7️⃣ Dự đoán giá nhà mới
# =====================================================
new_house = np.array([[110]]) #Diện tích 110m2
predicted_price = model.predict(new_house)
print(f"\n🏠 Dự đoán giá cho nhà 110 m²: {predicted_price[0]:.2f} tỷ VNĐ")

```

Lúc này nhập vào diện tích sẽ ra giá nhà tương ứng. Quá đơn giản phải không :) 