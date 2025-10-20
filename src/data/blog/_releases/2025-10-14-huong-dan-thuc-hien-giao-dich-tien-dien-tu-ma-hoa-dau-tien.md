---
author: khongai
ogImage: /public/assets/2025/10/09/crypto_intro.png
pubDatetime: 2025-10-14T15:22:00Z
modDatetime: 2025-10-14T16:52:45.934Z
title: Cryptocurrency 101 - Phần 3, Hướng dẫn thực hiện giao dịch tiền điện tử mã hóa đầu tiên
slug: tu-hoc-ve-tien-ma-hoa-cho-nguoi-moi-bat-dau-phan03-thuc-hien-giao-dich-tien-dien-tu-ma-hoa-dau-tien
featured: false
draft: false
tags:
  - cryptocurrency
description:
  Hướng dẫn thực hành từng bước giúp người mới hoàn tất giao dịch tiền điện tử mã hóa (cryptocurrency) đầu tiên, từ cài đặt ví, sao lưu seed, tạo địa chỉ nhận đến gửi giao dịch thử.
---

## Table of contents


# Góc lý thuyết - Một số khái niệm cơ bản

Trước khi bắt đầu thực hiện **giao dịch Cryptocurrency đầu tiên**, có một số khái niệm đơn giản mà tôi nghĩ chúng ta cần nắm rõ. 

Đây đều là các khái niệm chung, nghĩa là tương tự ở các đồng tiền điện tử mã hóa (Cryptocurrency) khác nhau. Bài viết này tôi dùng **Bitcoin** làm ví dụ.

## Một Số Loại Ví (Wallet)

Giống như ngoài đời thường nếu Ví là thứ dùng để bỏ tiền thì trong crypto Ví (Wallet) là công cụ để lưu trữ, gửi, nhận Cryptocurrency. Có rất nhiều loại khác nhau và với mỗi loại lại có thể có các nhà phát triển khác nhau (Có thể là công ty hoặc cộng đồng). Việc lựa chọn loại nào của nhà phát triển nào tùy theo mục đích và kinh nghiệm của người dùng.

| Loại ví | Mô tả | Ưu điểm | Nhược điểm |
| --- | --- | --- | --- |
| **Desktop wallet** (Ví máy tính) | Cài trên PC (Windows/macOS) | Toàn quyền kiểm soát | Dễ bị tấn công nếu máy không an toàn |
| **Mobile wallet** (Ví di động) | Chạy trên iOS/Android | Tiện lợi, dễ dùng | Giảm riêng tư vì dùng máy chủ ngoài |
| **Web wallet** (Ví web) | Truy cập qua trình duyệt | Dễ sử dụng | Bên thứ ba giữ khóa → rủi ro cao |
| **Hardware wallet** (Ví phần cứng) | Thiết bị riêng lưu khóa & ký giao dịch | Bảo mật cao nhất | Cần kết hợp với ví phần mềm để dùng |

## Khóa Riêng (Private Key)

Chi tiết sẽ được giải thích ở các phần sau. Ở đây tạm coi **Khóa riêng (Private key)** như một mã PIN cực dài giúp bạn có quyền truy cập vào ‘tài khoản’ tiền mã hóa của bạn (bao gồm Bitcoin).

Nếu bạn là người duy nhất nắm **Private Key**, bạn kiểm soát hoàn toàn số tiền Cryptocurrency của mình. Ngược lại, nếu bạn không giữ **Private Key**, thì bên thứ ba đang kiểm soát **Private Key** sẽ nắm quyền thực sự đối với số tiền Cryptocurrency của bạn.

Để nhấn mạnh điều này, Andreas Antonopoulos (Một chuyên gia nổi tiếng về Bitcoin) đã nói:

> Your keys, your coins. Not your keys, not your coins.
> 
> 
> (Khóa của bạn – Tiền của bạn. Không có khóa – Không có tiền.) 🔑💰
> 

**Private key** thường được quản lý trong các Ví (Wallet). Dĩ nhiên là cũng có thể quản lý độc lập nếu muốn.

## Cụm Từ Hạt Giống (Seed Phrase)

### Vấn Đề quá nhiều Private key

Mỗi Private key tương ứng với một "tài khoản" Cryptocurrency. Nhưng bạn hoàn toàn có thể có nhiều Private key khác nhau, có thể là nhiều loại tiền số (Giống như nhiều tài khoản trên nhiều ngân hàng), hoặc thậm trí là nhiều 'tài khoản' ở cùng 1 loại tiền số. Như vậy, bạn sẽ phải quản lý rất nhiều Private key 🤯 Quá mệt đúng không?

### Cơ Chế Hay Ho Hơn: Seed Phrase

Để giải quyết vấn đề này, người ta đã sinh ra một cái gọi là **Seed Phrase**  (Còn được gọi là Mnemonic/Recovery phrase - Tiếng việt gọi là cụm từ Hạt giống). Một chuỗi từ ngẫu nhiên (thường 12 hoặc 24 từ).

**Seed phrase** được sử dụng là nguồn gốc để sinh ra **toàn bộ các private keys** trong Ví. Ta có thể sinh ra vô số (Gần như vô hạn) các Private Key.

Từ một seed nhập trên các thiết bị khác nhau sẽ cho kết quả đồng nhất thông tin Private Key trong Ví. 

⇒ Tóm lại: **Chỉ cần có seed là có thể quản lý nhiều tài khoản Cryptocurrency/Bitcoin.**

## Địa chỉ ví (wallet address)

Trong thế giới thực khi chuyển tiền cho người khác bạn cần số tài khoản, trong Cryptocurrency có khái niệm tương đương gọi là địa chỉ ví (wallet address).

- wallet address là **chuỗi ký tự duy nhất** (gồm chữ và số) được sinh ra từ **Private key** của bạn.

- Mối quan hệ giữa Private key và wallet address là mối quan hệ 1 - 1 tức là 1 Private key sẽ tương ứng với 1 wallet address. 

Điều này có nghĩa là nếu bạn **dùng lại cùng một địa chỉ nhiều lần** người khác có thể **xem được tổng số tiền nhận được** qua địa chỉ đó. Vì vậy,**nên tạo địa chỉ mới mỗi lần nhận thanh toán** để bảo vệ quyền riêng tư.

## Cùng nhau tạo giao dịch Cryptocurrency đầu tiên

Tôi lựa chọn **Bitcoin** để thực hiện giao dịch đầu tiên. Ở phần mô tả bên trên có nhiều loại ví khác nhau, và để đơn giản, tôi sử dụng **Mobile Wallet** (ví di động).

Các hệ thống **Cryptocurrency**, bao gồm cả **Bitcoin**, không phải chỉ là một hoặc vài máy tính riêng lẻ, mà là **một mạng lưới hàng nghìn máy tính ngang hàng (peer-to-peer)** kết nối với nhau qua Internet. Thông thường, sẽ có một **mạng chính (mainnet)** – nơi các đồng BTC có **giá trị thật**.

Bên cạnh mạng chính, người ta còn xây dựng một **mạng phụ** chuyên dùng cho mục đích thử nghiệm (test), gọi là **testnet** (mạng thử nghiệm). Mạng này hoạt động tương tự (có thể nói là giống hệt) như mạng chính, nhưng các đồng BTC trên đó **không có giá trị thực**, chỉ dùng để kiểm thử hoặc học tập.

Khi nói đến **testnet**, bạn sẽ thường nghe đến khái niệm **Faucet**.

![Faucet](/assets/2025/10/14/faucet.png)

Từ **“Faucet”** trong tiếng Việt nghĩa là “**vòi nước nhỏ giọt**”. Đây là một cách chơi chữ mang tính hình tượng, dùng để mô tả cơ chế “phát” một lượng nhỏ “tiền” — kiểu như “nhỏ giọt” — để người dùng **thử nghiệm và làm quen**.

Trong bài này, tôi sử dụng **mạng testnet** để thực hiện giao dịch đầu tiên mang tính **demo**. Trên mạng **mainnet**, quy trình thực hiện **tương tự** gần như không có khác biệt gì.

![Create wallet](/assets/2025/10/14/create_wallet.gif)