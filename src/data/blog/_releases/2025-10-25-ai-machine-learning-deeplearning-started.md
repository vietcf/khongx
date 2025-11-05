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
  Bài viết này chúng ta sẽ cùng nhau làm quen với những thuật ngữ đầu tiên về Trí tuệ nhân tạo (Artificial Intelligent ~ AI), Học máy (Machine Learning ~ ML), Học sâu (Deep learning ~ DL).
---

>Gần đây vì lý do công việc tôi phải tìm hiểu về AI, ML, DL - dĩ nhiên chỉ ở mức cần hiểu nôm na **Nó là cái gì**. Trong quá trình đọc, tôi có ghi chú lại vài điều, biết đâu sẽ thành một chuỗi bài nho nhỏ. Giống như những loạt bài trước, loạt bài về AI, ML, DL của tôi cũng mang phong cách **Mì ăn liền**, nhanh gọn & thực dụng của **người đi làm**

## Table of contents

# 1. Trí tuệ nhân tạo (Artificial Intelligence – AI) là gì?

Không có định nghĩa tuyệt đối chính xác, nhưng tôi có đọc qua một lượt tổng hợp đại ý như sau:

**Trí tuệ nhân tạo (Artificial Intelligence - AI): Là một lĩnh vực trong khoa học máy tính, với mục tiêu là giúp máy tính có thể “hành xử” giống con người — biết suy luận, học hỏi, hiểu ngôn ngữ, ra quyết định và sáng tạo.**

**Ví dụ 👉**

* Trợ lý ảo như **Siri, Alexa, ChatGPT** → **Hiểu** và **Phản hồi** ngôn ngữ tự nhiên.
* **Xe tự lái** → **Nhận diện** vật thể, dự đoán tình huống và **ra quyết định** di chuyển.

=> Các hoạt động này trước nay ta chỉ thấy ở con người, nhưng hiện nay "máy tính" cũng đã có khả năng thực hiện là nhờ Artificial Intelligence - AI.

AI, ML, DL (tôi sẽ nói sau) có mối quan hệ mật thiết mô tả ngắn gọn bằng hình sau:

![AI ML DL](/assets/2025/10/25/03_ai_overview.png)


# 2. Học máy (Machine Learning – ML) là gì?

Sự phát triển lớn tiếp theo của AI chính là **Học máy (Machine Learning – ML)**.

**ML là một nhánh con của AI, mô tả khả năng máy tính học hỏi từ dữ liệu mà không cần "lập trình trực tiếp"** – tương tự như cách con người học từ kinh nghiệm.

*“Lập trình trực tiếp” - nghĩa là con người phải viết ra từng quy tắc, từng điều kiện cụ thể để máy tính làm theo. Với ML thay vì viết các quy tắc cụ thể, ta cho máy “dữ liệu + ví dụ kết quả đúng”, rồi để máy "tự dò/tìm" ra quy tắc ẩn trong dữ liệu đó. Ví dụ: Bạn không viết ra quy tắc “khuôn mặt có mắt, mũi, miệng là người. Bạn chỉ đưa cho máy hàng nghìn bức ảnh có người và không có người, kèm nhãn “người” / “không người”. Máy sẽ tự học được đặc trưng giúp phân biệt hai loại ảnh đó*

Theo thời gian, càng có nhiều dữ liệu và quá trình huấn luyện, mô hình ML càng **chính xác hơn và ra quyết định tốt hơn**.

*Trí tuệ nhân tạo (AI) xuất hiện từ những năm 1950 với mục tiêu mô phỏng tư duy con người. Từ đó, nhánh Học máy (ML) phát triển – cho phép máy tự học từ dữ liệu. ML bùng nổ mạnh mẽ trong thời đại Big Data, GPU, và Deep Learning, trở thành nền tảng cho hầu hết công nghệ hiện đại ngày nay.*

# 3. Thuật toán học máy (Machine Learning Algorithm), Training, Model và Deployment

Ta hay nghe về các thuật ngữ như Thuật toán học máy (Machine Learning Algorithm), Training, Model và Deployment vậy chúng rốt cuộc là cái gì?

## 🧮 Thuật toán học máy (Machine Learning Algorithm)

Thuật toán trong toán học là tập hợp các bước hoặc quy tắc rõ ràng để giải quyết một vấn đề hoặc thực hiện một nhiệm vụ cụ thể.

**Ví dụ 👉**

Trong toán học, thuật toán có thể là **các bước** để giải phương trình bậc hai, tính ước chung lớn nhất (UCLN), ...

Tương tự **Thuật toán học máy Là tập hợp các bước hoặc quy tắc toán học giúp máy tính tự học từ dữ liệu và rút ra quy luật.**

>Nói tới toán là đau đầu :) nói thật lập trình viên 100 ông thì 99 ông sợ toán :) 1 ông còn lại làm nghiên cứu chắc thích toán. Có lẽ vậy mà trước giờ nói tới AI, ML, DL khá ngại vì "nghe nói" nó toàn toán.
>Vài thuật toán mà ông nào học lập trình cũng học như tìm kiếm, sắp xếp, ... thực tế chúng cũng đơn giản chủ yếu là lặp lại một số bước. Qua trọng là hiểu ý tưởng là code được. Thuật toán ML tôi nghĩ cũng vậy hiểu là viết được, chắc phức tạp hơn chút thôi. Mà giờ có lib hết rồi khéo chả cần code hiểu ý tưởng để truyền & điều chỉnh params cho phù hợp.

=> 💡Tóm lại: ML Algorithm nó chỉ là các bước hoặc quy tắc toán học giúp máy tính "tự học" từ dữ liệu và "rút ra quy luật".

Các thuật toán ML tương đối đa dạng.

![ml algo](/assets/2025/10/26/0_intro_ml2.png)

## 🧩 Mô hình học máy (Machine Learning Model)

>Đây chắc là thuật ngữ mà mọi người nghe nhiều nhất gần đây. Nào là mô hình a, b, c bao nhiêu tỉ "tham số"... Có vẻ như càng nhiều "tỉ" thì càng khủng ...

Khi thuật toán được **Huấn luyện (Training)** trên dữ liệu (Data), nó tạo ra **Một mô hình học máy ( Machine Learning Model hay gọi tắt là Model)** – tức là **phiên bản đã học xong**, có thể **dự đoán** hoặc **phân loại** dữ liệu mới.

**Ví dụ👉**

Giả sử bạn muốn dùng ML để dự đoán giá nhà 🏠 dựa trên các thông tin như:
Diện tích (m²), Số phòng ngủ, Vị trí, Năm xây dựng, v.v.

🔹 Dữ liệu (Data): Là bảng chứa thông tin của hàng nghìn căn nhà thực tế, kèm theo giá bán thật.

🔹 Thuật toán ML (ML Algorithm): Là “cách học” giúp máy tìm mối quan hệ giữa các yếu tố (diện tích, vị trí, số phòng, v.v.) và giá nhà dựa trên dữ liệu.

Giả sử mỗi yếu tố là một biến, và mỗi biến có một “trọng số” (weight) nhất định ảnh hưởng đến giá.
Ở giai đoạn này, các trọng số chưa có giá trị cụ thể — máy sẽ tự học ra chúng trong quá trình huấn luyện (Training).

🔹 Mô hình (Model): Trong quá trình huấn luyện (Training), tức là đưa dữ liệu vào cho thuật toán học, ta thu được một mô hình.  Kết quả này có được sau khi mô hình trải qua một số lượng bước huấn luyện nhất định dựa trên dữ liệu, các trọng số được xác định thành những giá trị cụ thể. Lúc này, "công thức tính toán" đã tương đối rõ ràng, chỉ còn chờ truyền vào các “biến” đầu vào để cho ra kết quả

🔹 Kết quả (Prediction): Khi nhập thông tin của một căn nhà mới (như diện tích, vị trí...), mô hình sẽ áp dụng các trọng số đã học được để dự đoán giá bán ước tính.

![Model](/assets/2025/10/25/04_model_data.png)

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

# 4. Mạng nơ-ron (Neural Networks) và Học sâu (Deep Learning – DL)

## Mạng nơ-ron nhân tạo (Artificial Neural Networks – ANN)

Nếu bạn còn nhớ, ở đầu ta có nói mục tiêu chính của AI là giúp máy “hành xử” giống con người. Thì một trong những phương pháp **cốt lõi** để đạt điều đó là **mạng nơ-ron nhân tạo (Artificial Neural Networks – ANN).**
(Tại sao nói là cốt lõi tôi sẽ giải thích bên dưới)

### 🧠 Liên hệ với não người

**Não người** hoạt động nhờ hàng tỷ **tế bào thần kinh (neurons)** được kết nối với nhau.
Mỗi neuron **truyền tín hiệu điện – hóa học** qua **khớp thần kinh (synapses)** – những “cầu nối” cho thông tin.

![synpaps](/assets/2025/10/25/07_synaps.png)

Khi con người **học hoặc trải nghiệm điều mới**, não sẽ **điều chỉnh độ mạnh của các kết nối** này → hình thành **mẫu (pattern)** giúp ghi nhớ và phản ứng tốt hơn.

Cơ chế này được mạng nơ-ron nhân tạo (Artificial Neural Networks – ANN) mô phỏng lại trong máy tính, và chính điều đó là điểm “cốt lõi” giúp ANN cho phép máy tính thực hiện những việc tương tự như não con người.

### 💡 Cấu trúc mạng nơ-ron nhân tạo (ANN)

Một mạng nơ-ron cơ bản gồm 3 phần:

* **Input Layer (Lớp đầu vào):** nhận dữ liệu thô
  → Ví dụ: Ảnh 4x4 pixel có **16 nút đầu vào**, mỗi nút đại diện cho một pixel
* **Hidden Layers (Lớp ẩn):** xử lý và trích xuất đặc trưng (feature extraction)
  → Mỗi kết nối có **trọng số (weight)** thể hiện mức độ quan trọng
* **Output Layer (Lớp đầu ra):** đưa ra kết quả dự đoán cuối cùng

![ann](/assets/2025/10/25/08_ann.png)

Ở đây nếu bạn chưa hiểu cũng không sao, tôi sẽ có một bài nói về ANN chi tiết hơn ở sau.

### 🔢 Ví dụ: Nhận diện chữ số viết tay (0–9)

* Các lớp đầu phát hiện **đường nét, góc cạnh, đường cong**

* Các lớp sâu hơn kết hợp đặc trưng → xác định số hoàn chỉnh

* Lớp đầu ra gồm **10 nút (0–9)** → chọn số có **xác suất cao nhất**

### Deep Learning

Nếu Mạng Neron (Artificial Neural Networks – ANN) có **trên 3 lớp ẩn**, ta gọi đó là **Deep Learning (Học sâu)**

![ann](/assets/2025/10/25/09_deeplearning.png)

# 5. So sánh Machine Learning (ML) và Deep Learning (DL)

Deep Learning hay được hiểu là “Học sâu”, là một nhánh nhỏ của Machine Learning (ML). Nếu như học máy cho phép máy tính học hỏi từ dữ liệu để tự động đưa ra dự đoán, thì học sâu là bước tiến xa hơn khi nó giúp máy tính tự học từ các mẫu/ví dụ và thực hiện các tác vụ cụ thể, tương tự như cách con người tư duy từ kinh nghiệm thực tế. So với Machine Learning truyền thống, Deep Learning có nhiều đặc điểm nổi bật hơn. Xin phép tổng hợp so sánh bên dưới:

| Đặc điểm        | Machine Learning (ML)                     | Deep Learning (DL)                               |
| --------------- | ----------------------------------------- | ------------------------------------------------ |
| **Dữ liệu**     | Thường cần **dữ liệu có nhãn**            | Có thể học từ **dữ liệu thô, không nhãn**        |
| **Cách học**    | Cần **chọn đặc trưng (feature)** thủ công | **Tự học đặc trưng** từ dữ liệu                  |
| **Tự động hóa** | Cần con người can thiệp                   | **Tự học hoàn toàn (self-learning)**             |
| **Ứng dụng**    | Dự đoán giá, phân loại cơ bản             | Nhận diện hình ảnh, giọng nói, ngôn ngữ tự nhiên |
