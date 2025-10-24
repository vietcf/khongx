---
author: khongai
ogImage: /public/assets/2025/10/09/crypto_intro.png
pubDatetime: 2025-10-19T15:22:00Z
modDatetime: 2025-10-19T16:52:45.934Z
title: Cryptocurrency 101 - Phần 5, Khám phá về Blockchain - lớp kỹ thuật bên dưới của Distributed Ledger trong Cryptocurrency
slug: tu-hoc-ve-tien-ma-hoa-cho-nguoi-moi-bat-dau-phan03-blockchain-lop-ky-thuat-ben-duoi-cua-tien-dien-tu-ma-hoa-cryptocurrency
featured: false
draft: false
tags:
  - cryptocurrency
description:
  Blockchain là lớp kỹ thuật bên dưới Distributed Ledger — nơi các node không chỉ cùng giữ sổ, mà còn tự giám sát và xác thực lẫn nhau bằng toán học. Nhờ đó, dữ liệu trở nên bất biến, minh bạch và đáng tin cậy. 
---

Phần này sẽ mô tả về  Blockchain, chính là lớp kỹ thuật bên dưới giúp xây dựng Distributed Ledger của Cryptocurrency. 

> **Note:** Bài viết này dành cho những người làm tech.
> Tôi vẫn cố viết theo hướng đơn giản nhất để hy vọng mọi người đều có thể tiếp cận.


## Table of contents



# 1. Blockchain ~ Chain of Blocks

Blockchain ~ Chain of Blocks. Hay tiếng Việt là **“Chuỗi (Chain) các khối (Block) dữ liệu"**.

![Blockchain](/assets/2025/10/19/0_blockchain.png)


Chuỗi (Chain) này bài trước tôi có nhắc tới là **Một chuỗi bất biến (Immutability)** nghĩa đã ghi vào {Block} thì không thể sửa. Chain càng này càng dài ra, ta chỉ có thể thêm các {Block} vào cuối Chain.

# 2. Một số khái niệm liên quan đến Blockchain trong khoa học máy tính

## 2.1. Hàm băm (Hash)

Hàm băm là một **hàm toán học** nhận vào dữ liệu (bất kỳ kích thước nào) - **Plain text** và trả về một chuỗi ký **cố định độ dài**, gọi là **giá trị băm - Hash value**.

![Hash func](/assets/2025/10/19/1_hashfunc.png)


Nếu để so sánh với một thứ trong thực tế có thể hình dung Hàm băm giống như **“dấu vân tay” của dữ liệu** — là đại diện duy nhất, không thể trùng lặp. Hàm băm có một số tính chất sau:


| Tính chất                      | Ý nghĩa dễ hiểu                                                                                                                                           |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Một chiều (One-way)**        | Có thể tính Hash value từ dữ liệu Plain text, nhưng **không thể đảo ngược** nghĩa là từ Hash value gần như không tính toán để tìm lại dữ Plain text. Giống như nghiền trái cây thành sinh tố – không thể “lấy lại quả táo”. |
| **Đầu vào khác → đầu ra khác** | Chỉ cần thay đổi 1 ký tự đầu vào trong plain text, Hash value sẽ thay đổi hoàn toàn.                                                                                             |
| **Đầu ra cố định độ dài**      | Dù dữ liệu 1 byte hay 1 GB, hash vẫn cho ra độ dài Hash value như nhau (VD: SHA-256 → 256 bit).                                                                      |
| **Dễ tính toán, khó giả mạo**  | Dễ tính toán Hash value, nhưng gần như không thể tìm hai dữ liệu khác nhau có cùng Hash value.                                                                        |

> 🧩 **Tóm lại:** Hash value giống như “vân tay” của dữ liệu – hai dữ liệu khác nhau gần như không thể có cùng dấu vân tay.


### Mã hóa (Encryption) và chữ ký số (Digital Signature)

### Mã hóa cơ bản

Mã hóa (Encryption) là quá trình biến dữ liệu gốc (**plaintext**) thành dữ liệu mã hóa (**ciphertext**) để người khác **không thể đọc được nếu không có khóa giải mã (key)**.

> Mã hóa giống như bỏ thư vào hộp khóa lại.
> Chỉ người có chìa khóa (key) mở mới đọc được nội dung.

* Quá trình chuyển **plaintext → ciphertext** gọi là **mã hóa (encryption)**
* Quá trình chuyển **ciphertext → plaintext** gọi là **giải mã (decryption)**

⚠️ **Mã hóa (Encryption) khác với băm (Hash):**

* **Băm (Hash)** là **1 chiều**, không thể giải ngược.
* **Mã hóa (Encryption)** là **2 chiều**, có thể giải ngược nếu có khóa.


### Mã hóa đối xứng (Symmetric Cryptography)

Trong **Symmetric Cryptography** mã hóa và khóa giải mã **giống nhau**.

![Symetric encrypt](/assets/2025/10/19/2_symetric_encrypt.png)

### Mã hóa bất đối xứng (Asymmetric Cryptography)

Trong **Asymmetric Cryptography** khóa mã hóa và giải mã **khác nhau hoàn toàn**.

![ASymetric encrypt](/assets/2025/10/19/3_async_metric.png)


Có thể thấy Asymetric sử dụng **một cặp khóa**:

* **Khóa công khai (Public Key)** – có thể chia sẻ cho mọi người.
* **Khóa riêng (Private Key)** – chỉ chủ sở hữu giữ.

Mã hóa bằng Public Key -> chỉ Private Key tương ứng mới giải mã được, và ngược lại Mã hóa bằng Private Key -> chỉ Public Key tương ứng mới giải mã được.


> *Trong cuộc sống thực tế nếu khóa bằng ổ khóa thì chỉ có thể có các chìa khóa với cấu trúc giống hệt nhau với mở được. Nhưng trong khoa học máy tính thì hợi đặc biệt, người ta thiết kế ra loại ổ khóa mà có thể sử dụng 1 chìa để khóa nhưng lại có thể sử dụng một chìa khác để mở, với 2 chìa có cấu trúc khác nhau hoàn toàn, khoa học thật kỳ diệu phải không!**

### Chữ ký số (Digital Signature)

Nếu mã hóa dùng để **giữ bí mật thông tin**, thì chữ ký số dùng để **xác minh ai tạo ra thông tin đó** và đảm bảo **dữ liệu không bị thay đổi sau khi ký** (*tính chống chối bỏ*).

* Dùng **Private Key để ký**
* Dùng **Public Key để xác minh**


🔁 Đây là “ứng dụng ngược” của cơ chế mã hóa bất đối xứng.

Quá trình ký và xác minh minh họa chi tiết bằng hình dưới đây:

![Singning](/assets/2025/10/19/5_digital_sign.png)

# 3. Khám phá cấu trúc Blockchain

## 3.1. Tiếp cận Blockchain từ cấu trúc đơn giản nhất

Ta vừa nói Blockchain được tạo từ các Block. Ta bắt đầu với một cấu trúc đơn giản **mỗi block** có một BlockID chỉ STT của block và có một trường `PreviousBlockHash` chứa **Hash value của block ngay trước đó** (`Hash(Block trước)`).

Với trường hợp đặc biệt là **block đầu tiên – Genesis Block** → không có khối trước, nên ta quy ước `PreviousBlockHash = 0x000...` - Một chuỗi toàn 0 (Thực tế với bitcoin là 64 số 0). Chuỗi này người ta hay gọi là Genesis Block (Khối khởi nguyên).

Ta có mô hình chuỗi này như sau:

```
[Genesis Block PrevHash=0x000...]
   ↓
[Block #1 PrevHash=Hash(Block0)]
   ↓
[Block #2 PrevHash=Hash(Block1)]
   ↓
[Block #3 PrevHash=Hash(Block2)]
   ↓
...
   ↓
[Block #n PrevHash=Hash(Block n-1)]
```

Từ cấu trúc này dễ dàng nhận thấy rằng nếu ai đó sửa dữ liệu trong bất kỳ block nào, do mỗi block lưu trữ Hash của block liền trước, nên khi dữ liệu thay đổi → Hash của block đó cũng thay đổi (theo tính chất của hàm băm). Hệ quả là toàn bộ các block phía sau sẽ trở nên không khớp, khiến chuỗi bị phá vỡ. Mạng blockchain sẽ phát hiện ngay sự bất thường này, vì mọi node trong mạng đều lưu bản sao giống hệt nhau của chuỗi khối (blockchain).

###  Giả mã cho người technical

Người làm technical đọc code dễ hơn đọc văn nên tôi viết giả mã cấu trúc dữ liệu block ở đây như sau

```python
Block {
    Index     # Số thứ tự của khối (0, 1, 2, 3, ...)
    Data      # Nội dung dữ liệu - Optional (VD: danh sách giao dịch)
    PrevHash  # Mã băm của khối trước
    Hash      # Mã băm của khối hiện tại
}
```

## 3.2. Nhưng… nếu chỉ dừng ở cấu trúc này thì chưa đủ

Mô hình “chuỗi khối nối nhau bằng Hash” tuy giúp phát hiện chỉnh sửa, nhưng thực tế còn nhiều vấn đề:

### Spam (DoS) mạng & chỉnh sửa trái phép

Như nói ở trên việc Hash rất dễ (Dễ theo hướng thực hiện nhanh và tốn rất rất ít tài nguyên) làm cho việc tạo block mới quá dễ => Nếu năng lực đủ mạnh node của kẻ tấn công có thể sinh hàng triệu block rác => làm nghẽn mạng (Ddos mạng), tốn băng thông, tốn bộ nhớ.

Việc tính toán quá nhanh đâm ra Kẻ tấn công còn có thể **sửa một block rồi tính lại toàn bộ chain**, tự tạo một chain rất dài, thậm trí không kiểm soát phá vỡ kiến trúc mạng, mạng phân mảnh không biết đâu là dữ liệu thật, đâu là dữ liệu giả.

### Không có cơ chế đồng thuận (Consensus)

Mọi node có thể tạo block → không có cách xác định “block thật”. Hai node tạo block cùng lúc → **fork liên tục** → mất tính thống nhất.

### Thiếu timestamp (thời gian & thứ tự)

Không biết block nào sinh ra trước → giao dịch có thể bị đảo thứ tự hoặc trùng lặp.

### Không giới hạn kích thước block

Không giới hạn dung lượng → node có thể tạo block vài GB → các node khác **quá tải RAM hoặc disk** → tấn công **Memory Flood**.

### Thiếu động lực kinh tế (Incentive)

Không có phần thưởng → không ai muốn duy trì mạng → hệ thống sụp đổ.


## 3.3. Giải pháp: Thêm `Nonce` và cơ chế “bài toán khó”

Để khắc phục, người ta thêm vào mỗi block **một giá trị đặc biệt** gọi là `Nonce`
(*Number used once – số chỉ dùng một lần*).

Kèm điều kiện nào đó. Phổ biến nhất lấy mạng Blockchain làm ví dụ: Hash của block chỉ hợp lệ nếu bắt đầu bằng n ký tự `0` liên tiếp. (n là số nguyên dương).

Như phần trên đã nói, hàm băm (Hash) là một hàm một chiều, tức là không thể dò ngược giá trị plaintext từ giá trị Hash value. Do đó, để tìm được một giá trị Hash Value thỏa điều kiện (ví dụ: bắt đầu bằng n=6 chữ số 0 liên tiếp), các Node bắt buộc chỉ còn cách thử đi thử lại hàng triệu lần. Cụ thể:

Các Node sẽ thay đổi giá trị Nonce (ví dụ: 1, 2, 3, 4, …, a, b, c, …) => Rồi tính lại Hash của block => Kiểm tra xem hash có đáp ứng điều kiện hay không.

Nếu chưa đạt, node lại tiếp tục thay Nonce khác và thử lại.... Quá trình này lặp đi lặp lại cho đến khi tìm được một Nonce hợp lệ.

Với số lượng chữ số 0 yêu cầu càng nhiều (nghĩa là độ khó càng cao), thì việc tìm ra một hash hợp lệ càng mất thời gian và tốn tài nguyên hơn. Nhờ vậy, bằng việc tăng n mạng blockchain có thể điều chỉnh “độ khó” (difficulty) thông qua giá trị n để kiểm soát tốc độ sinh block.

Việc  **thử thay Nonce hàng triệu lần Nonce** để tìm được Hash hợp lệ là Công việc này tiêu tốn tài nguyên (**CPU, điện, thời gian**) gọi là **Proof of Work (PoW)** - Tiếng việt gọi là bằng chứng công việc.

Từ đó:

* Ngăn spam.
* Ngăn sửa đổi (vì phải tính lại toàn bộ chuỗi).
* Tạo cơ chế “ai tốn công nhiều hơn → được công nhận”.


### Thêm Timestamp

Để xác định block nào sinh ra trước → thêm trường `Timestamp` (thường theo **Unix timestamp** — số giây từ `1970-01-01 00:00:00 UTC`).

### Giả mã cập nhật

Tôi cũng cập nhật giả mã cấu trúc dữ liệu sau khi bổ sung 1 số trường như sau:

```python
Block {
    Index:     # Số thứ tự khối (block height)
    Data:      # Dữ liệu (VD: danh sách giao dịch)
    PrevHash:  # Hash của khối trước
    Nonce:     # Giá trị thử để tìm hash hợp lệ
    Hash:      # Hash của khối hiện tại
    Timestamp: # Thời điểm khối được tạo
}
```

## 3.4. Kết quả sau cải thiện bằng thêm `Nonce`

* Không thể dễ dàng **spam** hoặc **giả mạo block**.
* Mạng có **chi phí tính toán thực**, đảm bảo công bằng.

# 4. Node tính Nonce và thuật ngữ “đào coin”

Việc tìm giá trị Nonce tốn tài nguyên (CPU, điện năng, thời gian) => Khi node tính thành công Nonce => **được thưởng coin**. Trong Crypto thuật ngữ gọi việc đó là **“đào coin” (Coin mining)**.

Thực tế việc tìm Nonce để Hash block thỏa mãn điều kiện là công việc với khối lượng tính toán lớn, các máy có thể **hợp tác đào** (pool mining) với nhau, sau đó chia phần thưởng theo công sức đóng góp.

Nếu lấy ví dụ trong thực tế thì có thể ví việc **Đào Coin** như là việc làm thuê ghi sổ kế toán cho **Blockchain** vậy.


# 🔒 Tóm lại

* `PreviousBlockHash` → đảm bảo **chuỗi liên kết chặt chẽ**.
* `Nonce` + “bài toán hash” → tạo **chi phí thực, chống spam, thiết lập đồng thuận**.
* `Timestamp` → xác định thời gian block được tạo.
* `Đào coin` → là **hoạt động làm thuê ghi sổ kế toán cho mạ blockchain.