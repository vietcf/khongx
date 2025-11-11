---
author: khongai
ogImage: /public/assets/2025/10/30/0_neuron_intro.jpg
pubDatetime: 2025-10-30T15:22:00Z
modDatetime: 2025-10-30T16:52:45.934Z
title: AI 101 - Phần 3, Mạng Nơ ron (Neural Network) và Học sâu (Deep Learning)
slug: ai-101-phan3-neural-network-and-deep-learning
featured: false
draft: false
tags:
  - AI
description:
  Bài viết này chúng ta sẽ cùng nhau tìm hiểu tiếp các khái niệm về Mạng Neron (Neural Network) và Học sâu (Deeplearning)
---


![AI ML Flow](/assets/2025/10/25/flow.png)

>👉 Buổi hôm nay sẽ nói sẽ về Neural Network và Deep Learning!

Cũng không quên nhắc lại hình vẽ về "đại gia đình AI" để mường tượng về mối quan hệ giữa cái khái niệm

![1 ai](/assets/2025/10/30/1_neural_network.png)

# Não người và cơ chế ghi nhớ thông tin

Trước khi tìm hiểu về mạng neuron, hãy bắt đầu từ một ví dụ thực tế:
Khi ta gặp một người nhiều lần, não sẽ dần ghi nhớ họ thông qua nhiều đặc điểm như khuôn mặt, dáng đi hay cách ăn mặc...

Sau này, khi gặp ai đó có một vài nét tương đồng, ta thường có cảm giác quen thuộc, như đã từng gặp ở đâu đó.

Càng nhiều nét tương đồng, cảm giác thân quen càng hiện hữu — như thể não ta đang thực hiện một “phép cộng” các nét tương đồng ấy.
Kết quả của “phép cộng” này càng lớn thì cảm giác quen thuộc càng mạnh – giống như một tín hiệu sinh học có độ “mạnh” hay “yếu” khác nhau.

Tóm lại: "Càng nhiều đặc điểm được ghi nhớ → tín hiệu càng mạnh → cảm giác quen thuộc càng rõ"

Đến đây, ta có thể “mường tượng” về mối liên hệ giữa “tổng” các đặc điểm và độ mạnh của tín hiệu thần kinh, từ đó hình thành nên khả năng ghi nhớ.

Hiện tượng này được các nhà khoa học mô tả thông qua mô hình neuron sinh học. Mỗi ký ức hay nhận thức được hình thành từ mức độ liên kết giữa các tế bào thần kinh (neurons) – nơi các tín hiệu điện – hóa học được truyền qua các khớp thần kinh (synapses).

![2 nao nguoi](/assets/2025/10/30/2_nao_nguoi.png)

Phóng to liên kết giữa 2 tế bào thần kinh.

![3 lien ket](/assets/2025/10/30/3_link_zoom.png)

Khi con người học tập hoặc trải nghiệm điều mới, não sẽ điều chỉnh cường độ của các kết nối thần kinh, củng cố những liên kết thường xuyên hoạt động và làm yếu dần những liên kết ít sử dụng.

Chính sự thay đổi liên tục này tạo nên các mẫu kết nối (patterns) trong não, giúp chúng ta ghi nhớ, nhận biết và phản ứng ngày càng chính xác hơn.

# Mạng Neuron (Neural Network) trong học máy và Học sâu (Deep learning)

Cơ chế ghi nhớ của não người bên trên được mạng nơ-ron nhân tạo (Artificial Neural Networks – ANN) “mô phỏng” lại trong máy tính với một cấu trúc đơn giản hơn, và chính điều đó là điểm “cốt lõi” giúp ANN cho phép máy tính thực hiện những việc tương tự như não con người.

## Cấu trúc cơ bản một Neural Network

Một mạng neural nhân tạo cơ bản gồm ba loại tầng/lớp (layers):

![4 neural network](/assets/2025/10/30/04_nerual_network.png)

* Lớp đầu vào (Input Layer): Nhận dữ liệu ban đầu.

* “Các” lớp ẩn (Hidden Layers): Nhận dữ liệu từ Input Layer. Xử lý dữ liệu thông qua hàng triệu phép toán ma trận và phi tuyến. Trả lại kết quả tính toán cho Output Layer. Chú ý từ “các” có nghĩa là có thể có “một” hoặc “nhiều” hidden layer.
 
* Lớp đầu ra (Output Layer):  Đưa ra kết quả dự đoán cuối cùng.

* Mỗi Layer gồm nhiều vòng tròn, mỗi vòng tròn (circle) trong sơ đồ gọi là một node (hoặc nơron nhân tạo), mô phỏng lại hoạt động của một tế bào thần kinh trong não người.

⚠️ **Deep Learning:**: Neural Network có số  Hidden Layers > 4 thì được gọi là Deep Learning

## Neural Network phản ánh "tín hiệu" bằng cách nào

Để thể hiện mối liên hệ giữa các Neuron người ta sử dụng một mô hình toán học như sau:

![5 act func](/assets/2025/10/30/05_activation_func.png)


Lúc này mỗi nơ-ron (neuron) trong mạng hoạt động giống như một đơn vị tính toán, cụ thể:

* Nhận đầu vào (Input): Mỗi nơ-ron nhận giá trị từ các nơ-ron lớp trước ~ x

* Tính toán trọng số (Weights): Mỗi đầu vào được nhân với một trọng số (weight) nhất định ~ w

* Tổng hợp thông tin (Summation): Các giá trị đầu vào được cộng lại và thêm một hệ số điều chỉnh (bias) ~ b

* Hàm kích hoạt (Activation Function): Xác định xem tín hiệu có được truyền tiếp hay không ~ f. Hàm f này đặc trưng cho từng layer, và được lựa chọn tùy theo mục đích của mô hình.

* Truyền sang lớp tiếp theo (Output): Nếu tín hiệu đầu ra sau khi qua hàm kích hoạt đủ mạnh (vượt ngưỡng), nó sẽ được truyền sang lớp kế tiếp để tiếp tục xử lý.

## Mô hình X có hàng tỷ tham số? là gì

Ta hay nghe nói:

>ChatGPT có 175 tỷ tham số,
>
>Claude có 560 tỷ tham số…

**Tham số (parameter)** chính là tất cả **các trọng số (weights)** và **hệ số chệch (biases)** kết nối giữa neuron với neuron.

Nếu sử dụng tối ưu thì "càng nhiều tham số" =>  mạng càng sâu và rộng => Độ chính xác càng cao

## Cơ chế học (Learning Mechanism) 

Về bản chất, Deep Learning cũng giống Machine Learning: mô hình học từ dữ liệu để tìm ra mối quan hệ giữa đầu vào (X) và đầu ra (Y). Điểm khác biệt nằm ở cách mạng neuron tự điều chỉnh hàng triệu trọng số (weights) và hệ số chệch (biases) để dần cải thiện độ chính xác. Quá trình học diễn ra qua ba bước chính:

![5 improve](/assets/2025/10/30/06_improve.png)


* Lan truyền thuận (Forward Propagation): Dữ liệu đi qua các lớp mạng, mỗi lớp biến đổi đầu vào một chút để trích xuất đặc trưng, cho đến khi ra kết quả dự đoán ở lớp cuối.

* Tính sai số (Loss Function): So sánh kết quả dự đoán với giá trị thật để biết mô hình “sai lệch bao nhiêu”.

* Lan truyền ngược (Backpropagation): Mạng tính toán đạo hàm (gradient) và tự điều chỉnh các trọng số theo hướng giảm sai số.

Ba bước này được lặp lại hàng triệu lần (training loop). Mỗi lần, mô hình học thêm một chút từ sai số của chính nó — nhờ đó các trọng số dần được tối ưu, và mạng ngày càng “thông minh” hơn.

💡 Chính cơ chế lặp – phản hồi – điều chỉnh này giúp mạng neuron tự cải thiện mô hình theo thời gian, tương tự cách não người củng cố kết nối thần kinh khi học

## Một số thuật ngữ liên quan Epoch / Batch / Iteration

| Thuật ngữ | Nghĩa | Liên hệ ví dụ |
| --- | --- | --- |
| **Epoch** | Một vòng học qua toàn bộ dữ liệu | Một lần vẽ lại toàn bộ đường cong |
| **Batch** | Một nhóm nhỏ dữ liệu trong mỗi epoch | Vẽ từng phần nhỏ của đường cong |
| **Iteration** | Một lần cập nhật trọng số (sau mỗi batch) | Chỉnh nét vẽ sau mỗi đoạn |

## Self-Supervised Learning

> Self-Supervised Learning (SSL) là phương pháp học mà mô hình tự tạo ra “nhãn” cho chính dữ liệu của mình —
> không cần con người gán nhãn thủ công.

💡 Mô hình **tự đặt bài toán – tự tạo đáp án – rồi tự học**.

Đây là lý do gọi là **“tự giám sát”** (self-supervised).

## Các loại mô hình Deeplearning

| **Loại mô hình** | **Ứng dụng chính** |
| --- | --- |
| **1. Convolutional Neural Network (CNN)** | Nhận dạng hình ảnh, phát hiện vật thể, phân đoạn ảnh, thị giác máy tính (Computer Vision) |
| **2. Recurrent Neural Network (RNN)** | Dự báo chuỗi thời gian, xử lý ngôn ngữ tự nhiên (NLP), nhận dạng giọng nói |
| **3. Long Short-Term Memory (LSTM)** | Phân tích chuỗi dữ liệu dài, dịch máy, dự đoán văn bản, nhận dạng lời nói |
| **4. Gated Recurrent Unit (GRU)** | Giống LSTM nhưng nhẹ hơn, dùng cho dự báo thời gian thực hoặc dữ liệu tuần tự |
| **5. Autoencoder (AE)** | Nén dữ liệu, giảm chiều, phát hiện bất thường (anomaly detection), khử nhiễu ảnh hoặc tín hiệu |
| **6. Variational Autoencoder (VAE)** | Sinh dữ liệu mới (ảnh, âm thanh), học biểu diễn tiềm ẩn (latent representation) |
| **7. Generative Adversarial Network (GAN)** | Tạo ảnh, video, âm thanh, deepfake, tăng dữ liệu huấn luyện |
| **8. Transformer** | Xử lý ngôn ngữ tự nhiên, dịch máy, tóm tắt, chatbot, sinh văn bản (LLM) |
| **9. Vision Transformer (ViT)** | Nhận dạng và phân loại ảnh, phát hiện vật thể, hiểu ngữ cảnh hình ảnh |
| **10. Diffusion Model** | Sinh ảnh, video, giọng nói; ví dụ: Stable Diffusion, DALL·E, Midjourney |
| **11. Graph Neural Network (GNN)** | Phân tích mạng xã hội, khuyến nghị (recommendation), phát hiện gian lận, hóa học tính toán |
| **12. Mamba Model (SSM-based)** | Xử lý dữ liệu tuần tự, mô hình ngôn ngữ (LLM) hiệu năng cao, thay thế Transformer tiềm năng |