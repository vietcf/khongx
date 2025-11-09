---
author: khongai
ogImage: /public/assets/2025/10/25/0_ai_intro.png
pubDatetime: 2025-10-25T15:22:00Z
modDatetime: 2025-10-25T16:52:45.934Z
title: AI 101 - Phần 1, Một số thuật ngữ cho người mới bắt đầu tìm hiểu về Trí tuệ nhân tạo, Học máy, Học sâu
slug: ai-101-phan1-mot-so-thuat-ngu-cho-nguoi-moi-bat-dau-tim-hieu-ve-tri-tue-nhan-tao-hoc-may-hoc-sau
featured: false
draft: false
tags:
  - AI
description:
  Bài viết này chúng ta sẽ cùng nhau làm quen với những thuật ngữ đầu tiên về Trí tuệ nhân tạo (Artificial Intelligent ~ AI), Học máy (Machine Learning ~ ML)
---

>Gần đây vì lý do công việc tôi phải tìm hiểu về AI, ML, DL - dĩ nhiên chỉ ở mức cần hiểu nôm na **Nó là cái gì**. Trong quá trình đọc, tôi có ghi chú lại vài điều, biết đâu sẽ thành một chuỗi bài nho nhỏ. Giống như những loạt bài trước, loạt bài về AI, ML, DL của tôi cũng mang phong cách **Mì ăn liền**, nhanh gọn & thực dụng của **người đi làm**

## Table of contents

# 1. Trí tuệ nhân tạo (Artificial Intelligence – AI) là gì?

Tìm, đọc ở khắp nơi đều bảo không định nghĩa tuyệt đối chính xác, tổng hợp ở những nơi tôi đọc qua đại ý họ định nghĩa như sau:

**Trí tuệ nhân tạo (Artificial Intelligence - AI): Là một lĩnh vực trong khoa học máy tính, với mục tiêu là giúp máy tính có thể “hành xử” giống con người — biết suy luận, học hỏi, hiểu ngôn ngữ, ra quyết định và sáng tạo.**

**Ví dụ 👉**

* Trợ lý ảo như **Siri, Alexa, ChatGPT** → **Hiểu** và **Phản hồi** ngôn ngữ tự nhiên.
* **Xe tự lái** → **Nhận diện** vật thể, dự đoán tình huống và **ra quyết định** di chuyển.

=> Các hoạt động này trước nay ta chỉ thấy ở con người, nhưng hiện nay "máy tính" cũng đã có khả năng thực hiện là nhờ Artificial Intelligence - AI.

Thường ngày ta hay nghe nhữn thuật ngữ như AI, ML, DL ( chi tiết tôi sẽ nói sau) chúng có mối quan hệ mật thiết mô tả ngắn gọn bằng hình sau:

![AI ML DL](/assets/2025/10/25/03_ai_overview.png)


# 2. Học máy (Machine Learning – ML) là gì?

Sự phát triển lớn tiếp theo của AI chính là **Học máy (Machine Learning – ML)**.

**ML là một nhánh con của AI, mô tả khả năng máy tính học hỏi từ dữ liệu mà không cần "lập trình trực tiếp"** – tương tự như cách con người học từ kinh nghiệm.

*“Lập trình trực tiếp” - nghĩa là con người phải viết ra từng quy tắc, từng điều kiện cụ thể để máy tính làm theo. Với ML thay vì viết các quy tắc cụ thể, ta cho máy “dữ liệu + ví dụ kết quả đúng”, rồi để máy "tự dò/tìm" ra quy tắc ẩn trong dữ liệu đó. Ví dụ: Bạn không viết ra quy tắc “khuôn mặt có mắt, mũi, miệng là người. Bạn chỉ đưa cho máy hàng nghìn bức ảnh có người và không có người, kèm nhãn “người” / “không người”. Máy sẽ tự học được đặc trưng giúp phân biệt hai loại ảnh đó*

Theo thời gian, càng có nhiều dữ liệu và quá trình huấn luyện, mô hình ML càng **chính xác hơn và ra quyết định tốt hơn**.

*Trí tuệ nhân tạo (AI) xuất hiện từ những năm 1950 với mục tiêu mô phỏng tư duy con người. Từ đó, nhánh Học máy (ML) phát triển – cho phép máy tự học từ dữ liệu. ML bùng nổ mạnh mẽ trong thời đại Big Data, GPU, và Deep Learning, trở thành nền tảng cho hầu hết công nghệ hiện đại ngày nay.*

# 3. Thuật toán học máy (Machine Learning Algorithm), Training, Model và Deployment

Ta hay nghe về các thuật ngữ như Thuật toán học máy (Machine Learning Algorithm), Training, Model và Deployment vậy chúng rốt cuộc là cái gì? hãy cùng tôi đi tìm hiểu về các thuật ngữ này.

## 🧮 Thuật toán học máy (Machine Learning Algorithm)

**Thuật toán** trong toán học là tập hợp các bước hoặc quy tắc rõ ràng để giải quyết một vấn đề hoặc thực hiện một nhiệm vụ cụ thể.

**Ví dụ 👉**

Trong toán học, ta hay gặp các thuật toán "rất" quen thuộc như: Giải phương trình bậc hai, tính ước chung lớn nhất (UCLN), ...

Tương tự **Thuật toán học máy Là tập hợp các bước hoặc quy tắc toán học giúp máy tính tự học từ dữ liệu và rút ra quy luật.**

>Khi nói tới "thuật toán" nghe thì có vẻ đau đầu nhưng thực tế các thuật toán trong ML hầu hết là các thuật toán đã có lời giải trong toán học. Nhiệm vụ của người làm ML là hiểu và ứng dụng chúng, biến chúng thành các đoạn mã giải quyết các bài toán gặp trong khoa học máy tính.

=> 💡Tóm lại: ML Algorithm là các bước hoặc quy tắc toán học giúp máy tính "tự học" từ dữ liệu và "rút ra quy luật".

Một số thuật toán phổ biến được sử dụng tromg ML.

![ml algo](/assets/2025/10/25/0_intro_ml2.png)

## 🧩 Mô hình học máy (Machine Learning Model)

>Đây chắc là thuật ngữ mà mọi người nghe nhiều nhất gần đây

Khi thuật toán được **Huấn luyện (Training)** trên dữ liệu (Data), nó tạo ra **Một mô hình học máy ( Machine Learning Model hay gọi tắt là Model)** – tức là **phiên bản đã học xong**, có thể **dự đoán** hoặc **phân loại** dữ liệu mới.

**Ví dụ dễ hiểu👉**

Giả sử bài toán đơn giản nhất: Bạn muốn dùng ML để dự đoán giá nhà 🏠 dựa trên thông tin Diện tích (m²)

🔹 Dữ liệu (Data): Là bảng chứa thông tin của hàng nghìn căn nhà thực tế, kèm theo giá bán thật.

| Diện tích (m²) | Giá nhà (triệu VNĐ) |
| -------------- | ------------------- |
| 30             | 480                 |
| 50             | 650                 |
| 70             | 820                 |
| 100            | 1100                |
| 120            | 1280                |


* Cột Diện tích là đặc trưng đầu vào (feature / input X)
* Cột Giá nhà là nhãn đầu ra (label / output y)

🔹 Thuật toán ML (ML Algorithm): Là “cách học” giúp máy tìm ra mối quan hệ giữa X (diện tích) và y (giá nhà). Ở đây, ta giả định mối quan hệ tuyến tính:

![ml disx](/assets/2025/10/25/04_ml_algo.png)

Trong giai đoạn đầu, **w** và **b** chưa biết.

➡️ Quá trình Training (Huấn luyện) sẽ tìm ra các giá trị tốt nhất của w,b.

3. Quá trình Huấn luyện (Training)

Thuật toán sẽ tính sai số (error) giữa giá dự đoán và giá thật,

Sau đó điều chỉnh dần w,b để giảm sai số (dựa trên hàm mất mát — loss function, ví dụ Mean Squared Error).

Sau nhiều vòng lặp, mô hình học được các giá trị tối ưu của w, b là ```w*``` và ```b*``` (Các giá trị cụ thể)

🔹 Mô hình (Model): Sau khi học xong, ta có:

![ml model](/assets/2025/10/25/05_model.png)

Đây chính là mô hình ML – tức là công thức có thể dùng để dự đoán giá nhà mới.

🔹 Kết quả (Prediction): Khi nhập diện tích của căn nhà mới (ví dụ 90m²), mô hình sẽ tính:

![ml predict](/assets/2025/10/25/06_predict.png)

→ Kết quả là giá nhà ước lượng.

👉  **Rõ ràng, khi đã có mô hình, ta không cần truy cập lại dữ liệu huấn luyện để dự đoán. Dữ liệu chỉ cần trong giai đoạn huấn luyện (Training) mà thôi**


## ⚙️ Triển khai mô hình (Deployment / Inference)

Sau khi có mô hình, ta **đưa nó vào sử dụng thực tế** để dự đoán trên dữ liệu mới. Việc này gọi là **Deployment** hoặc **Inference**. 

Thông thường có hai nhóm bài toán chính sau khi Deployment

* **Prediction (dự đoán giá trị)** Ví dụ: Mô hình dự đoán giá nhà → nhập dữ liệu nhà mới → mô hình trả ra **giá dự đoán**.
* **Classification (phân loại đối tượng)** Ví dụ: Mô hình phát hiện email spam → khi có email mới, mô hình phân loại thành spam / không spam.

### 🏷️ **Gán nhãn dữ liệu (Labeling)**

Là quá trình **cho máy biết “đáp án đúng”** của từng dữ liệu để mô hình học cách phân loại hoặc dự đoán chính xác hơn sau này.

**Ví dụ👉**

Bạn có 1000 ảnh mèo 🐱 và chó 🐶 → gán nhãn từng ảnh là “mèo” hoặc “chó”. Sau khi huấn luyện, mô hình học được đặc điểm của từng loài → khi nhập ảnh mới, nó tự nhận biết là mèo hay chó.

## Machine Learning Lifecycle

Machine Learning Lifecycle: là **chuỗi các bước có cấu trúc** giúp phát triển, triển khai và tối ưu mô hình học máy một cách hiệu quả và bền vững.

![AI Lifecycle](/assets/2025/10/25/05_ai_lifecycle.png)

Tham khảo bài viết chi tiết từ Datacamp:

🔗 [https://www.datacamp.com/blog/machine-learning-lifecycle-explained](https://www.datacamp.com/blog/machine-learning-lifecycle-explained)

## 🔢 Phân loại thuật toán học máy (Machine Learning Algorithms)

### 🔹1. Học có giám sát (Supervised Learning)

👉 Học từ **dữ liệu có nhãn (labeled data)**

🎯 Mục tiêu: **Dự đoán** hoặc **phân loại**

💡 Ví dụ: Dự đoán **giá nhà**, phát hiện **email spam**


### 🔹2. Học không giám sát (Unsupervised Learning)

👉 Làm việc với **dữ liệu không có nhãn (unlabeled data)**

🎯 Mục tiêu: **Tìm mẫu ẩn, nhóm, mối quan hệ** trong dữ liệu

💡 Ví dụ: **Phân cụm khách hàng**, **phân tích hành vi mua hàng**

### 🔹3. Học bán giám sát (Semi-supervised Learning)

👉 Kết hợp **dữ liệu có nhãn** và **không nhãn**

🎯 Mục tiêu: Dùng **ít dữ liệu có nhãn** để hướng dẫn mô hình học phần còn lại

💡 Ví dụ: Nhận diện hình ảnh khi **chỉ một phần nhỏ dữ liệu được gắn nhãn**

### 🔹4. Học tăng cường (Reinforcement Learning)

Máy tính (gọi là **agent**) học bằng cách **tương tác với môi trường** – giống như con người học từ kinh nghiệm thực tế.

* Nếu hành động **đúng / có lợi** → nhận **thưởng (reward)**
* Nếu hành động **sai / gây hại** → nhận **phạt (penalty)**

Qua nhiều lần thử – sai (trial and error), agent học được **chiến lược tối ưu (optimal policy)** để **tối đa hóa phần thưởng**.

🎯 Mục tiêu: **Tối ưu hành động** dựa trên cơ chế **thưởng – phạt**

![Reinforce](/assets/2025/10/25/06_reinforce.png)

💡 Ví dụ: **Robot tự di chuyển**, **AI chơi game**, **xe tự lái**

Bài viết này chúng ta sẽ dừng tại đây. Bài sau ta sẽ đi về một bước tiến hóa tiếp theo của ML là DL.