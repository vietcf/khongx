---
author: khongai
ogImage: /public/assets/2025/10/09/crypto_intro.png
pubDatetime: 2025-10-16T15:22:00Z
modDatetime: 2025-10-16T16:52:45.934Z
title: Cryptocurrency 101 - Phần 6, Public Key, Private Keys, Wallet Address, HD Wallet những thuật ngữ quan trọng cần hiểu trong Cryptocurrency
slug: tu-hoc-ve-tien-ma-hoa-cho-nguoi-moi-bat-dau-phan6-private-key-public-key-wallet
featured: false
draft: false
tags:
  - cryptocurrency
description:
  Bài viết này đi sâu vào cơ chế hoạt động của Private Key, Public Key, Wallet Address và HD Wallet trong Bitcoin — Cách chúng sinh ra, liên kết với nhau và đảm bảo quyền sở hữu tài sản.
---

Bài trước ta có nói về **mật mã khóa bất đối xứng**, trong đó có một cặp: **Private key (k)** → **Public key (K)**. Buổi hôm nay tôi muốn dành nhiều thời gian hơn để nói kỹ hơn về nó và những thứ liên quan như Wallet Address, HD Wallet.


## Table of contents


# 🔐 Khóa riêng tư (Private Key - k)

Private Key chỉ đơn giản là **một con số**, thường **rất lớn** và được **chọn ngẫu nhiên**. Ta hay thấy nó dưới dạng một chuỗi ký tự, nhưng đó **không phải dạng gốc**, mà là **được mã hóa** để con người dễ đọc hơn (tức là đã qua một phép biến đổi).

* Việc kiểm soát **Private Key** là **nguồn gốc của quyền sở hữu** tất cả số “tiền” điện tử của bạn. **Private Key** phải được giữ **bí mật tuyệt đối**, vì nếu tiết lộ nó cho bên thứ ba, tức là bạn đã **trao cho họ toàn quyền kiểm soát số Bitcoin** được bảo vệ bởi khóa đó Nếu bạn **mất Private Key** đồng nghĩa với việc bạn **mất toàn bộ Bitcoin** trong ví và không có cách nào có thể **khôi phục được** — điều này không giống như trong hệ thống ngân hàng truyền thống, khi mất mật khẩu đăng nhập tài khoản, ta chỉ cần mang giấy tờ ra chứng minh là có thể reset lại tài khoản.
* Về mặt kỹ thuật, **Private Key** rất quan trọng, được dùng để **tạo chữ ký số (digital signature)** nhằm chứng minh quyền sở hữu và **ủy quyền chi tiêu cryptocurrency.**
* Nó có thể được biểu diễn ở nhiều định dạng, ví dụ:

  * **Hexadecimal (Hex)**
  * **WIF (Wallet Import Format)** – dùng để import/export giữa các ví.
* Một số ví như **Trust Wallet** hoặc sàn **Binance** cũng hỗ trợ xuất **Private Key** ở dạng text để người dùng import/export.


# 🔓 Khóa công khai (Public Key - K)

* Khóa công khai **(Public key ~ K)** được tính toán từ **Private key (k)**.
* Quan hệ giữa *k* và *K* là **một chiều** – từ Private Key ta có thể tính ra Public Key (k -> K), nhưng **không thể làm ngược lại.**. Vì vậy, khóa công khai có thể được chia sẻ **rộng rãi** mà không làm lộ Private Key.

> 🧮 Về mặt toán học, Public Key được tạo ra bằng phép nhân trên đường cong elliptic (ECC).
> *(Bạn nào muốn tìm hiểu sâu hơn có thể đọc thêm về Elliptic Curve Cryptography.)*


# ✍️ Phân tích quá trình ký số và xác minh giao dịch

Giờ ta tạm hiểu quá trình gửi/nhận cryptocurrency (Transaction) là **một giao dịch**.
Để xác nhận giao dịch, người gửi sẽ **dùng chữ ký số** để ký vào Transaction.


## 1️⃣ Quá trình ký số (Signing Process)

Khi người dùng (ví dụ: Alice) muốn **chi tiêu** một khoản tiền mà cô ấy sở hữu, ví sẽ thực hiện:

1. **Tạo bản tóm tắt (hash) của transaction**

   * Tính toán các thông số Transaction (inputs, outputs, amounts, locktime, v.v.)
   * Hash **hai lần bằng SHA-256** (trong Bitcoin) → tạo ra **Transaction Hash (message digest)** → Đây là phần dữ liệu được ký.
     *(Chú ý: Các thông số trong Transaction có phần “chữ ký”, nhưng khi hash thì phần đó để trống — vì sẽ được thêm sau khi ký.)*
2. **Ký giao dịch bằng Private Key (k)**

   * Ví dùng **Private Key** để ký lên **Transaction Hash.**
3. **Đính kèm chữ ký** vào phần để trống trong Transaction.


## 2️⃣ Quá trình xác minh (Verification Process)

Khi một node hoặc miner nhận được giao dịch, nó sẽ thực hiện ngược lại:

1. **Tạo lại Transaction Hash**

   * Xóa phần chữ ký trong input.
   * Hash hai lần bằng **SHA-256** → tạo lại **Transaction Hash** ban đầu.
2. **Dùng Public Key (K) để xác minh chữ ký**

   * Node lấy chữ ký và public key lưu trong Transaction.
   * Chạy thuật toán với đầu vào: *Transaction Hash + Public Key + Signature* → nếu đúng → chữ ký hợp lệ.

**Kết quả của quá trình ký và xác minh**

* **Tính xác thực (Authenticity) & Chống chối bỏ (Non-repudiation):**
  Chỉ người có *Private Key* mới có thể ký giao dịch ⇒ Sau khi *verify*, người nhận có thể khẳng định rằng bạn **chính là chủ sở hữu hợp pháp của số tiền** (địa chỉ ví khớp với *Public Key*) **và đồng thời là người đã đồng ý thực hiện giao dịch**, vì bạn **đã ký xác nhận lên giao dịch đó.**

* **Tính toàn vẹn (Integrity):**
  Bất kỳ thay đổi nào trong Transaction → Transaction Hash thay đổi → Chữ ký sai → Giao dịch bị từ chối.


# 💳 Địa chỉ ví (Wallet Address)

Để **nhận Bitcoin**, bạn cần một **địa chỉ (address)** — tương tự **số tài khoản ngân hàng**.

Quá trình sinh địa chỉ ví (trong BTC) như sau:

* Từ **Private Key (k)** → sinh **Public Key (K)**
* Băm hai lần: `RIPEMD160(SHA256(K))`
* Kết quả là **Public Key Hash (PKH)** – 20 byte (160 bit)

📘 **Mục đích:** Giảm kích thước & tăng bảo mật ⇒ không lộ trực tiếp Public Key.

> 🧠 *Ngắn gọn:*
> *Private Key → Public Key → Hash (SHA256 + RIPEMD160) → Bitcoin Address*


# 💼 Ví Cryptocurrency (Wallet)

> *Ví Bitcoin không chứa Bitcoin.*
> Nó chỉ **quản lý các khóa (keys)** để chứng minh quyền sở hữu và chi tiêu trên blockchain.

---

## 🧩 1️⃣ Ví Bitcoin là gì

* Bitcoin thật ra **nằm trên blockchain**.
* Ví chỉ quản lý **Private Key** (để ký) và **Public Key** (để nhận tiền).

> *Ví = Bộ quản lý cặp khóa (k ↔ K) + logic gửi/nhận Bitcoin.*

---

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

---

## 🌱 Mnemonic Seed (12–24 words)

Đây là **cụm từ khôi phục (Recovery Phrase)** gồm 12–24 từ tiếng Anh ngẫu nhiên khi bạn tạo ví.

* Là **phiên bản con người có thể đọc được** của “Seed” – hạt giống của toàn bộ ví.
* Bạn chỉ cần lưu cụm từ này — vì **từ đó ví có thể tái tạo toàn bộ hệ thống khóa & địa chỉ.**

> 💡 *Mnemonic chính là “chìa khóa gốc” duy nhất để khôi phục toàn bộ ví.*

---

## 🧮 Master Private Key + Chain Code

Từ **Seed**, ví tính toán ra hai giá trị gốc:

* **Master Private Key:** Khóa riêng gốc – nền tảng sinh ra các khóa con.
* **Chain Code:** Chuỗi “muối” (salt) bổ sung, giúp sinh khóa con **một cách ngẫu nhiên và không thể đoán ngược.**

Cặp này kết hợp lại cho phép ví tạo ra một **cây khóa (Key Tree)** vừa xác định vừa an toàn.

> 👉 Nếu bạn có “Seed”, bạn có thể tính lại “Master Key” và “Chain Code”.

---

## 🌳 HD Tree (Cấu trúc cây khóa)

“Cây khóa HD” (HD Key Tree) là **cấu trúc phân cấp** nơi từ một khóa gốc có thể sinh ra vô số khóa con từ **Master Key** và **Chain Code.**

* Mỗi “nhánh” của cây đại diện cho một **tài khoản, ví phụ hoặc mục đích cụ thể**.
  Ví dụ:

  * Một nhánh cho địa chỉ nhận tiền
  * Một nhánh cho tiền thừa (change)
  * Các nhánh khác cho tài khoản phụ
  * …

Trong mỗi nhánh, ví sinh ra **các khóa mở rộng (Extended Keys):**

| Loại     | Mô tả                | Chức năng                                                                             |
| -------- | -------------------- | ------------------------------------------------------------------------------------- |
| **xprv** | Extended Private Key | Có thể sinh ra *private key con* và *public key con*. Dùng để ký và chi tiêu Bitcoin. |
| **xpub** | Extended Public Key  | Chỉ sinh được *public key con* → dùng để tạo địa chỉ nhận tiền. Không thể chi tiêu.   |

> 🧠 Đây là cơ chế giúp phân tách an toàn giữa ví nhận tiền (**xpub**) và ví chi tiêu (**xprv**).
> Ví dụ: cửa hàng có thể đặt **xpub** trên server để tạo địa chỉ mới cho mỗi đơn hàng,
> còn **xprv** được giữ offline để ký giao dịch khi rút tiền.


### Cấu trúc minh họa

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

✅ **Tóm lại:**

> Ví Bitcoin không giữ Bitcoin,
> mà giữ **Private Keys** – chìa khóa mở “két sắt” của bạn trên blockchain.
> Mất khóa = mất tiền.
> Giữ seed = giữ toàn bộ tài sản.

