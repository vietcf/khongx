---
author: khongai
ogImage: /public/assets/2025/10/09/crypto_intro.png
pubDatetime: 2025-10-22T15:22:00Z
modDatetime: 2025-10-22T16:52:45.934Z
title: Cryptocurrency 101 - Phần 6, Public Key, Private Key, Wallet Address, HD Wallet những thuật ngữ quan trọng cần hiểu trong Cryptocurrency
slug: tu-hoc-ve-tien-ma-hoa-cho-nguoi-moi-bat-dau-phan6-private-key-public-key-wallet
featured: false
draft: false
tags:
  - cryptocurrency
description:
  Bài viết này đi sâu vào cơ chế hoạt động của Private Key, Public Key, Wallet Address và HD Wallet trong Bitcoin — Cách chúng sinh ra, liên kết với nhau và đảm bảo quyền sở hữu tài sản.
---

Bài trước ta có nói về **mật mã khóa bất đối xứng**, trong đó có một cặp: **Private key (k)** & **Public key (K)**. Buổi hôm nay tôi muốn dành nhiều thời gian hơn để nói kỹ hơn về chúng cũng những thứ liên quan như Wallet Address, HD Wallet. Nói chung không quá học thuật nhưng tôi tin mỗi ngày một chút dần dần cho đỡ nhàm chán.


## Table of contents


# 🔐 Khóa riêng tư (Private Key - k)

Private Key (Quy ước viết tắt là k) chỉ đơn giản là **một con số**, thường là con số **rất lớn** và được **chọn ngẫu nhiên**. Thực tế ta hay thấy nó dưới dạng một chuỗi ký tự, nhưng đó **không phải dạng gốc**, mà là **được mã hóa** để con người dễ đọc, dễ sử dụng ~ import/export cũng như trao đổi (tức là đã qua một phép biến đổi).

* Việc kiểm soát **Private Key** là nguồn gốc của quyền sở hữu tất cả số “tiền” điện tử của bạn. **Private Key** phải được giữ **bí mật tuyệt đối**, vì nếu tiết lộ nó cho bên thứ ba, tức là bạn đã **trao cho họ toàn quyền kiểm soát số crytocurrency** được bảo vệ bởi Private key đó. Nếu bạn **mất Private Key** đồng nghĩa với việc bạn **mất toàn bộ số Cryptocurrency** trong ví và không có cách nào có thể **khôi phục được** — Điều này không giống như trong hệ thống ngân hàng truyền thống, khi mất mật khẩu đăng nhập tài khoản, ta chỉ cần mang giấy tờ ra chứng minh là có thể reset lại tài khoản.

* Về mặt kỹ thuật, **Private Key** được dùng để tạo public key, địa chỉ ví cũng như sử dụng để ký số (digital signature) nhằm **chứng minh quyền sở hữu** và **ủy quyền chi tiêu cryptocurrency**

* Nó có thể được biểu diễn ở nhiều định dạng, ví dụ:

  * **Hexadecimal (Hex)** - Dạng này con người không đọc được mà để máy đọc
  * **WIF (Wallet Import Format)** – dùng để import/export giữa các ví.

* Một số ví như **Trust Wallet** hoặc sàn **Binance** cũng hỗ trợ xuất **Private Key** ở dạng text để người dùng import/export tiện lợi cho việc trao đổi, lưu trữ. Việc backup Private key riêng lẻ là chuyện ngày xưa, thực tế giờ đây đã có các lựa chọn import/export tiên tiến hơn: seed pharse/Mnemonic sẽ mô tả ở phần sau.

# 🔓 Khóa công khai (Public Key - K)

* Khóa công khai **(Public key ~ K)** được tính toán từ **Private key (k)**.

* Quan hệ giữa *k* và *K* là **một chiều** – từ Private Key ta có thể tính ra Public Key (k -> K), nhưng **không thể làm ngược lại.**. Vì vậy, Public Key có thể được chia sẻ **rộng rãi** mà không làm lộ Private Key.

> 🧮 Về mặt toán học, Public Key được tạo ra từ Private key bằng phép nhân trên đường cong elliptic (ECC).
> *(Bạn nào muốn tìm hiểu sâu hơn có thể đọc thêm về Elliptic Curve Cryptography)*


# ✍️ Phân tích quá trình ký số và xác minh giao dịch

Giờ ta tạm hiểu quá trình gửi/nhận cryptocurrency là **một giao dịch** (Transaction).

Để xác nhận Transaction, người gửi sẽ **dùng chữ ký số** để ký vào Transaction.

> Phần này tôi lấy BTC làm ví dụ cụ thể, về cơ bản thì các loại Cryptocurrency khác cũng có cơ chế tương tự.


## 1️⃣ Quá trình ký số (Digital Signing Process)

Khi người dùng (ví dụ: Alice) muốn **chi tiêu** một khoản tiền mà cô ấy sở hữu, ví sẽ thực hiện:

### 1. Tạo bản tóm tắt (hash) của transaction

  * Tính toán các thông số Transaction (inputs, outputs, amounts, locktime, v.v.)
    
  * Với BTC, Transaction sẽ Hash **hai lần bằng SHA-256** (trong Bitcoin) → tạo ra **Transaction Hash (message digest)** → Đây là phần dữ liệu được ký.

  *(Chú ý: Các thông số trong Transaction có phần “chữ ký”, nhưng khi hash thì phần đó để trống — vì sẽ được thêm sau khi ký.)*

### 2. Ký giao dịch bằng Private Key (k)

  * Ví dùng **Private Key** để ký lên **Transaction Hash.**

### 3. Đính kèm chữ ký** vào trong Transaction

  Như mô tả ở bước 1. phần “chữ ký” trong Transaction để trống. Tới bước này sau khi ký xong thì Chữ ký sẽ được "Điền" (Insert) vào   



## 2️⃣ Quá trình xác minh (Verification Process)

Khi một node hoặc miner nhận được giao dịch, nó sẽ thực hiện ngược lại:

### 1. Tạo lại Transaction Hash

  * Xóa phần chữ ký trong input.

  * Hash hai lần bằng **SHA-256** → tạo lại **Transaction Hash** ban đầu.

### 2. Dùng Public Key (K) để xác minh chữ ký

  * Node lấy chữ ký và public key lưu trong Transaction.
  * Chạy thuật toán với đầu vào: *Transaction Hash + Public Key + Signature* → nếu đúng → chữ ký hợp lệ.

**Kết quả của quá trình ký và xác minh**

### 3.Tính xác thực (Authenticity) & Chống chối bỏ (Non-repudiation):

  * Chỉ người có *Private Key* mới có thể ký giao dịch ⇒ Sau khi *verify*, người nhận có thể khẳng định rằng bạn **chính là chủ sở hữu hợp pháp của số tiền** (địa chỉ ví khớp với *Public Key*) **và đồng thời là người đã đồng ý thực hiện giao dịch**, vì bạn **đã ký xác nhận lên giao dịch đó.**

  * **Tính toàn vẹn (Integrity):**

  Bất kỳ thay đổi nào trong Transaction → Transaction Hash thay đổi → Chữ ký sai → Giao dịch bị từ chối.


# 💳 Địa chỉ ví (Wallet Address)

Để **nhận Cryptocurrency (bao gồm cả BTC)**, bạn cần một **địa chỉ (address)** — tương tự **số tài khoản ngân hàng**.

Quá trình sinh địa chỉ ví với trường hợp BTC như sau:

* Từ **Private Key (k)** → sinh **Public Key (K)**
* Băm hai lần: `RIPEMD160(SHA256(K))`
* Kết quả là **Public Key Hash (PKH)** – 20 byte (160 bit)

📘 **Mục đích:** Giảm kích thước & tăng bảo mật ⇒ không lộ trực tiếp Public Key.

🧠 **Ngắn gọn:**

> *Private Key → Public Key → Hash (SHA256 + RIPEMD160) → Bitcoin Address*


# 💼 Ví Cryptocurrency (Wallet)

> *Ví Bitcoin không chứa Bitcoin.*
> Nó chỉ **quản lý các khóa (keys)** để chứng minh quyền sở hữu và chi tiêu trên blockchain.


## 🧩 1️⃣ Ví Bitcoin là gì

* Bitcoin thật ra **nằm trên blockchain**.
* Ví chỉ quản lý **Private Key** (để ký) và **Public Key** (để nhận tiền).

> *Ví = Bộ quản lý cặp khóa (k ↔ K) + logic gửi/nhận Bitcoin.*


## 💰 2️⃣ Chức năng chính

* **Nhận tiền:**
  Cung cấp địa chỉ Bitcoin để người khác gửi vào.
* **Gửi tiền:**
  Dùng Private Key để ký giao dịch, sau đó gửi lên mạng Bitcoin.

## 🔑 3️⃣ Cách ví tạo và quản lý khóa

Một ví có **nhiều Private Key**, mỗi key tương ứng với một **Public Key**,
và mỗi Public Key tương ứng với **một địa chỉ ví.**

**Vì sao cần nhiều khóa và địa chỉ?**

* **Bảo mật & riêng tư:** mỗi giao dịch nên dùng địa chỉ mới.
* **Tiền thừa (Change):** phần dư được trả về địa chỉ mới.
* **Phân loại:** ví HD có thể gán địa chỉ theo tài khoản, đơn hàng, người gửi,...

## ⚙️ Cách cũ – Non-Deterministic Wallet

* Mỗi địa chỉ được tạo ngẫu nhiên.
* Phải sao lưu ví thường xuyên.
* Mất bản sao lưu = mất khóa mới = mất tiền.

## ⚙️ HD Wallet (Hierarchical Deterministic Wallet)

**HD Wallet (BIP32)** ra đời để giải quyết việc backup nhiều lần.
Thay vì tạo từng khóa ngẫu nhiên, HD Wallet dùng **một seed duy nhất** để sinh ra **vô số khóa con** theo quy tắc xác định.

> *(BIP – Bitcoin Improvement Proposal: “Đề xuất cải tiến Bitcoin”, tương tự RFC của Internet.)*


## 🌱 Mnemonic Seed (12–24 words)

Đây là **cụm từ khôi phục (Recovery Phrase)** gồm 12–24 từ tiếng Anh ngẫu nhiên khi bạn tạo ví.

* Là **phiên bản con người có thể đọc được** của “Seed” – hạt giống của toàn bộ ví.
* Bạn chỉ cần lưu cụm từ này — vì **từ đó ví có thể tái tạo toàn bộ hệ thống khóa & địa chỉ.**

> 💡 *Mnemonic chính là “chìa khóa gốc” duy nhất để khôi phục toàn bộ ví.*

## 🧮 Master Private Key + Chain Code

Từ **Seed**, ví tính toán ra hai giá trị gốc:

* **Master Private Key:** Khóa riêng gốc – nền tảng sinh ra các khóa con.
* **Chain Code:** Chuỗi “muối” (salt) bổ sung, giúp sinh khóa con **một cách ngẫu nhiên và không thể đoán ngược.**

Cặp này kết hợp lại cho phép ví tạo ra một **cây khóa (Key Tree)** vừa xác định vừa an toàn.

> 👉 Nếu bạn có “Seed”, bạn có thể tính lại “Master Key” và “Chain Code”.

## 🌳 HD Tree (Cấu trúc cây khóa)

“Cây khóa HD” (HD Key Tree) là **cấu trúc phân cấp** nơi từ một khóa gốc có thể sinh ra vô số khóa con từ **Master Key** và **Chain Code.**

  * Mỗi “nhánh” của cây đại diện cho một **tài khoản, ví phụ hoặc mục đích cụ thể**. Ví dụ:

    * Một nhánh cho địa chỉ nhận tiền
    * Một nhánh cho tiền thừa (change)
    * Các nhánh khác cho tài khoản phụ
    * …

  * Trong mỗi nhánh, ví sinh ra **các khóa mở rộng (Extended Keys):**

| Loại     | Mô tả                | Chức năng                                                                             |
| -------- | -------------------- | ------------------------------------------------------------------------------------- |
| **xprv** | Extended Private Key | Có thể sinh ra *private key con* và *public key con*. Dùng để ký và chi tiêu Bitcoin. |
| **xpub** | Extended Public Key  | Chỉ sinh được *public key con* → dùng để tạo địa chỉ nhận tiền. Không thể chi tiêu.   |

**Cấu trúc minh họa**

```text
Mnemonic Seed (12 words)
   ↓
Seed (512-bit)
   ↓
Master (xprv/xpub)
   ├── Account 0 (xprv/xpub)
   │     ├── Receiving (xprv/xpub)
   │     │     ├── Addr #0 → priv/pub key pair
   │     │     ├── Addr #1 → priv/pub key pair
   │     │     └── ...
   │     └── Change (xprv/xpub)
   │           ├── Addr #0 → priv/pub key pair
   │           └── ...
   │
   ├── Account 1 (xprv/xpub)
   │     ├── Receiving → ...
   │     └── Change → ...
   │
   ├── Account 2 (xprv/xpub)
   │     └── ...
   │
   └── ...
```

## 🧠 Tóm tắt dễ hiểu

> Mnemonic (12–24 từ)
> → sinh **Seed**
> → tạo **Master Private Key + Chain Code**
> → sinh **HD Tree**

>     ↳ Mỗi nhánh chứa **xprv / xpub**

>     ↳ Mỗi xprv/xpub sinh **Private & Public Keys con**

>     ↳ Cuối cùng tạo **Bitcoin Address con**


# ✅Tóm lại

* Private Key là chìa khóa bí mật chứng minh quyền sở hữu và cho phép chi tiêu cryptocurrency.

* Public Key được tạo ra từ Private Key theo chiều một chiều, dùng để xác minh chữ ký và nhận tiền.

* Wallet Address là phiên bản băm của Public Key, dùng như “số tài khoản” để nhận coin.

* Wallet chỉ lưu và quản lý cặp khóa, chứ không chứa tiền – tiền thật nằm trên blockchain.

* HD Wallet dùng một “Seed” duy nhất (từ cụm Mnemonic 12–24 từ) để sinh ra vô số khóa con (Tương ứng với vô số public key và địa chỉ ví), giúp dễ backup và quản lý.

> Quan trọng ⚠️
>
> Đảm bảo an toàn tuyệt đối cho Private Key hoặc Seed pharses/Mnemonic 12-24 từ.


