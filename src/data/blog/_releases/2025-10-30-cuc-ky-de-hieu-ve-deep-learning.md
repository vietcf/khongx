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

Quay trở lại với hình vẽ về "đại gia đình AI", buổi nay ta sẽ tìm hiểu các khái niệm liên quan tới Neural Network và Deep Learning.

![1 ai](/assets/2025/10/26/1_neural_network.png)

# Não người và cơ chế ghi nhớ thông tin

Trước khi tìm hiểu về mạng neuron, hãy bắt đầu từ một ví dụ thực tế:
Khi ta gặp một người nhiều lần, não sẽ dần ghi nhớ họ thông qua nhiều đặc điểm như khuôn mặt, dáng đi hay cách ăn mặc...

Sau này, khi gặp ai đó có một vài nét tương đồng, ta thường có cảm giác quen thuộc, như đã từng gặp ở đâu đó.

Càng nhiều nét tương đồng, cảm giác thân quen càng hiện hữu — như thể não ta đang thực hiện một “phép cộng” các nét tương đồng ấy.
Kết quả của “phép cộng” này càng lớn thì cảm giác quen thuộc càng mạnh – giống như một tín hiệu sinh học có độ “mạnh” hay “yếu” khác nhau.

Tóm lại: "Càng nhiều đặc điểm được ghi nhớ → tín hiệu càng mạnh → cảm giác quen thuộc càng rõ"

Đến đây, ta có thể “mường tượng” về mối liên hệ giữa “tổng” các đặc điểm và độ mạnh của tín hiệu thần kinh, từ đó hình thành nên khả năng ghi nhớ.

Hiện tượng này được các nhà khoa học mô tả thông qua mô hình neuron sinh học. Mỗi ký ức hay nhận thức được hình thành từ mức độ liên kết giữa các tế bào thần kinh (neurons) – nơi các tín hiệu điện – hóa học được truyền qua các khớp thần kinh (synapses).

![2 nao nguoi](/assets/2025/10/26/2_nao_nguoi.png)

Phóng to liên kết giữa 2 tế bào thần kinh.

![3 lien ket](/assets/2025/10/26/3_link_zoom.png)

Khi con người học tập hoặc trải nghiệm điều mới, não sẽ điều chỉnh cường độ của các kết nối thần kinh, củng cố những liên kết thường xuyên hoạt động và làm yếu dần những liên kết ít sử dụng.

Chính sự thay đổi liên tục này tạo nên các mẫu kết nối (patterns) trong não, giúp chúng ta ghi nhớ, nhận biết và phản ứng ngày càng chính xác hơn.
