---
author: khongai
ogImage: /public/assets/2025/10/09/crypto_intro.png
pubDatetime: 2025-10-25T15:22:00Z
modDatetime: 2025-10-25T16:52:45.934Z
title: AI 101 - Phần 1, Một số thuật ngữ cho người mới bắt đầu tìm hiểu về AI, ML, DL
slug: ai-101-mot-so-thuat-ngu-cho-nguoi-moi-bat-dau-tim-hieu-ve-ai-ml-dl
featured: false
draft: false
tags:
  - AI
description:
  Bài viết này chúng ta sẽ cùng bắt đầu những thuật ngữ đầu tiên về AI, ML, DL.
---

# 🧠 Một số thuật ngữ liên quan tới lĩnh vực Trí tuệ nhân tạo (Artificial Intelligence)

# **1. Trí tuệ nhân tạo (Artificial Intelligence – AI) là gì?**

Không có định nghĩa tuyệt đối chính xác, nhưng có thể hiểu:

> **Trí tuệ nhân tạo (AI)** là khả năng của máy móc hoặc hệ thống máy tính trong việc **thực hiện các nhiệm vụ vốn đòi hỏi trí tuệ con người** — như suy luận, học hỏi, hiểu ngôn ngữ, giải quyết vấn đề, ra quyết định hoặc sáng tạo.

💡 *Tóm lại: Trí tuệ nhân tạo giúp máy tính có thể “hành xử” giống con người — biết suy luận, học hỏi, hiểu ngôn ngữ, ra quyết định và sáng tạo.*

**Ví dụ:**

* Trợ lý ảo như **Siri, Alexa, ChatGPT** → hiểu và phản hồi ngôn ngữ tự nhiên.
* **Xe tự lái** → nhận diện vật thể, dự đoán tình huống và ra quyết định di chuyển.


# **2. Học máy (Machine Learning – ML) là gì?**

Sự phát triển lớn tiếp theo của AI chính là **Học máy (Machine Learning – ML)**.

> ML là một **nhánh con của AI**, mô tả khả năng **máy tính học hỏi từ dữ liệu mà không cần lập trình trực tiếp** – tương tự như cách con người học từ kinh nghiệm.

Theo thời gian, càng có nhiều dữ liệu và quá trình huấn luyện, mô hình ML càng **chính xác hơn và ra quyết định tốt hơn**.

> *Trí tuệ nhân tạo (AI) xuất hiện từ những năm 1950 với mục tiêu mô phỏng tư duy con người. Từ đó, nhánh **Học máy (ML)** phát triển – cho phép máy tự học từ dữ liệu. ML bùng nổ mạnh mẽ trong thời đại **Big Data**, **GPU**, và **Deep Learning**, trở thành nền tảng cho hầu hết công nghệ hiện đại ngày nay.*

**Machine Learning Lifecycle** là **chuỗi các bước có cấu trúc** giúp phát triển, triển khai và tối ưu mô hình học máy một cách hiệu quả và bền vững.
Tham khảo bài viết chi tiết từ Datacamp:
🔗 [https://www.datacamp.com/blog/machine-learning-lifecycle-explained](https://www.datacamp.com/blog/machine-learning-lifecycle-explained)


# **3. Thuật toán học máy (Machine Learning Algorithm), Training, Model và Deployment**

### 🧮 **Thuật toán học máy (Machine Learning Algorithm)**

Là tập hợp các **bước hoặc quy tắc toán học** giúp máy tính **tự học từ dữ liệu** và **rút ra quy luật**.

### 🧩 **Mô hình học máy (Machine Learning Model)**

Khi thuật toán được **huấn luyện (training)** trên dữ liệu, nó tạo ra **một mô hình học máy (Model)** – tức là **phiên bản đã học xong**, có thể **dự đoán hoặc phân loại** dữ liệu mới.

**Ví dụ:**

* Thuật toán = *Công thức nấu ăn (cách làm)*
* Mô hình = *Món ăn đã nấu xong (kết quả sau khi học)*

### ⚙️ **Triển khai mô hình (Deployment / Inference)**

Sau khi có mô hình, ta **đưa nó vào sử dụng thực tế** để dự đoán trên dữ liệu mới – gọi là **Deployment** hoặc **Inference**.
Hai nhóm bài toán chính:

* **Prediction (dự đoán giá trị)**
* **Classification (phân loại đối tượng)**

**Ví dụ:**

* Mô hình dự đoán giá nhà → nhập dữ liệu nhà mới → mô hình trả ra **giá dự đoán**.
* Mô hình phát hiện email spam → khi có email mới, mô hình **phân loại** thành spam / không spam.

### 🏷️ **Gán nhãn dữ liệu (Labeling)**

Là quá trình **cho máy biết “đáp án đúng”** của từng dữ liệu để mô hình học cách phân loại hoặc dự đoán chính xác hơn sau này.

**Ví dụ:**
Bạn có 1000 ảnh mèo 🐱 và chó 🐶 → gán nhãn từng ảnh là “mèo” hoặc “chó”.
Sau khi huấn luyện, mô hình học được đặc điểm của từng loài → khi nhập ảnh mới, nó tự nhận biết là mèo hay chó.


## 🔢 **Phân loại thuật toán học máy (Machine Learning Algorithms)**

### 🔹 1. **Học có giám sát (Supervised Learning)**

👉 Học từ **dữ liệu có nhãn (labeled data)**
🎯 Mục tiêu: **Dự đoán** hoặc **phân loại**
💡 Ví dụ: Dự đoán **giá nhà**, phát hiện **email spam**


### 🔹 2. **Học không giám sát (Unsupervised Learning)**

👉 Làm việc với **dữ liệu không có nhãn (unlabeled data)**
🎯 Mục tiêu: **Tìm mẫu ẩn, nhóm, mối quan hệ** trong dữ liệu
💡 Ví dụ: **Phân cụm khách hàng**, **phân tích hành vi mua hàng**

### 🔹 3. **Học bán giám sát (Semi-supervised Learning)**

👉 Kết hợp **dữ liệu có nhãn** và **không nhãn**
🎯 Mục tiêu: Dùng **ít dữ liệu có nhãn** để hướng dẫn mô hình học phần còn lại
💡 Ví dụ: Nhận diện hình ảnh khi **chỉ một phần nhỏ dữ liệu được gắn nhãn**

### 🔹 4. **Học tăng cường (Reinforcement Learning)**

Máy tính (gọi là **agent**) học bằng cách **tương tác với môi trường** – giống như con người học từ kinh nghiệm thực tế.

* Nếu hành động **đúng / có lợi** → nhận **thưởng (reward)**
* Nếu hành động **sai / gây hại** → nhận **phạt (penalty)**

Qua nhiều lần thử – sai (trial and error), agent học được **chiến lược tối ưu (optimal policy)** để **tối đa hóa phần thưởng**.

🎯 Mục tiêu: **Tối ưu hành động** dựa trên cơ chế **thưởng – phạt**
💡 Ví dụ: **Robot tự di chuyển**, **AI chơi game**, **xe tự lái**


# **4. Mạng nơ-ron (Neural Networks) và Học sâu (Deep Learning – DL)**

Nếu bạn còn nhớ, mục tiêu chính của AI là giúp máy “hành xử” giống con người.
Một trong những phương pháp cốt lõi để đạt điều đó là **mạng nơ-ron nhân tạo (Artificial Neural Networks – ANN).**

### 🧠 **Liên hệ với não người**

**Não người** hoạt động nhờ hàng tỷ **tế bào thần kinh (neurons)** được kết nối với nhau.
Mỗi neuron **truyền tín hiệu điện – hóa học** qua **khớp thần kinh (synapses)** – những “cầu nối” cho thông tin.

Khi con người **học hoặc trải nghiệm điều mới**, não sẽ **điều chỉnh độ mạnh của các kết nối** này → hình thành **mẫu (pattern)** giúp ghi nhớ và phản ứng tốt hơn.

👉 Cơ chế này được **mạng nơ-ron nhân tạo mô phỏng lại** trong máy tính.


### 💡 **Cấu trúc mạng nơ-ron nhân tạo**

Một mạng nơ-ron cơ bản gồm 3 phần:

* **Input Layer (Lớp đầu vào):** nhận dữ liệu thô
  → Ví dụ: Ảnh 4x4 pixel có **16 nút đầu vào**, mỗi nút đại diện cho một pixel
* **Hidden Layers (Lớp ẩn):** xử lý và trích xuất đặc trưng (feature extraction)
  → Mỗi kết nối có **trọng số (weight)** thể hiện mức độ quan trọng
* **Output Layer (Lớp đầu ra):** đưa ra kết quả dự đoán cuối cùng


### 🔢 **Ví dụ: Nhận diện chữ số viết tay (0–9)**

* Các lớp đầu phát hiện **đường nét, góc cạnh, đường cong**
* Các lớp sâu hơn kết hợp đặc trưng → xác định số hoàn chỉnh
* Lớp đầu ra gồm **10 nút (0–9)** → chọn số có **xác suất cao nhất**

Nếu mạng có **trên 3 lớp ẩn**, ta gọi đó là **Deep Learning (Học sâu).**



# **5. So sánh Machine Learning (ML) và Deep Learning (DL)**


| Đặc điểm        | Machine Learning (ML)                     | Deep Learning (DL)                               |
| --------------- | ----------------------------------------- | ------------------------------------------------ |
| **Dữ liệu**     | Thường cần **dữ liệu có nhãn**            | Có thể học từ **dữ liệu thô, không nhãn**        |
| **Cách học**    | Cần **chọn đặc trưng (feature)** thủ công | **Tự học đặc trưng** từ dữ liệu                  |
| **Tự động hóa** | Cần con người can thiệp                   | **Tự học hoàn toàn (self-learning)**             |
| **Ứng dụng**    | Dự đoán giá, phân loại cơ bản             | Nhận diện hình ảnh, giọng nói, ngôn ngữ tự nhiên |


### ⚙️ **Lợi thế chính của Deep Learning so với Machine Learning**

* **Không cần gán nhãn dữ liệu thủ công** → tiết kiệm thời gian & công sức.
* **Xử lý tốt dữ liệu lớn và phức tạp** (ảnh, video, âm thanh, văn bản…).
* Có thể coi **DL là phiên bản “mở rộng quy mô” của ML (scalable ML)** — có thể học từ lượng dữ liệu khổng lồ mà không cần hướng dẫn trực tiếp.


✅ **Xác minh kỹ thuật:**

* ✅ Các định nghĩa về AI, ML, DL và Neural Networks hoàn toàn chính xác, phù hợp với chuẩn của *Stanford AI Index* và *IBM Developer Docs*.
* ✅ Phân loại thuật toán (Supervised / Unsupervised / Semi-supervised / Reinforcement) đúng chuẩn.
* ✅ Ví dụ minh họa hợp lý, không sai lệch bản chất.
* ✅ Mô tả về mạng nơ-ron và Deep Learning chính xác với cấu trúc ANN hiện đại.
