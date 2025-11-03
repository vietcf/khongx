---
author: khongai
ogImage: /public/assets/2025/10/18/0_intro.png
pubDatetime: 2025-10-18T15:22:00Z
modDatetime: 2025-10-18T16:52:45.934Z
title: Cryptocurrency 101 - Phần 4, Cái nhìn "đầu tiên" về công nghệ xây dựng nên tiền điện tử mã hóa
slug: tu-hoc-ve-tien-ma-hoa-cho-nguoi-moi-bat-dau-phan03-nhung-cai-nhin-dau-tien-ve-cong-nghe-tien-dien-tu-ma-hoa
featured: false
draft: false
tags:
  - cryptocurrency
description:
  Blockchain là cách con người tạo ra “một cuốn sổ kế toán chung cho cả thế giới, nơi mọi người cùng ghi, cùng xác minh – và không cần tin ai để biết điều gì là thật.
---

Tôi không muốn viết về blockchain theo kiểu hàn lâm, khô khan hay nặng tính kỹ thuật. Loạt các viết sẽ bắt đầu từ những ý tưởng đơn giản nhất, dễ hiểu nhất, để bất kỳ ai — dù không rành công nghệ — cũng có thể nắm được tư tưởng cốt lõi của blockchain. Sau đó, tôi sẽ tiếp tục với những bài viết "dần" chuyên sâu hơn, để những ai làm kỹ thuật có thể đào sâu thêm các khía cạnh bên trong của công nghệ này.

## Table of contents

## Hệ thống Truyền thống: Cơ sở dữ liệu tập trung (Client-Server)

Hầu hết các hệ thống bạn dùng trên Internet (từ web, app, email đến thanh toán ngân hàng) đều chạy theo mô hình **Client-Server**. Cứ hình dung thế này: Toàn bộ người dùng(Client) kết nối về **một nơi duy nhất**(Server) của nhà cung cấp dịch vụ để thực hiện mọi thao tác. Mọi giao dịch, mọi thao tác – ví dụ: Chuyển tiền (Thực chất là thực hiện lệnh Ghi Nợ & Ghi Có trên các tài khoản banking) – đều được ghi lại tại một **Cơ sở dữ liệu (lịch sử giao dịch)** nằm gọn trong các máy chủ của nhà cung cấp đặt ở Data Center của họ.

![center](/assets/2025/10/18/01_center.png)

Mô hình này từ trước đến nay theo tôi vẫn hoạt động rất tốt, đáp ứng hầu hết nhu cầu hiện tại. Một số khác trên thế giới này lại nghĩ cần một mô hình khác hay ho hơn, lý do tôi đã giải thích khá dài ở đây 👉 [Lý do sự ra đời của Cryptocurrency](https://khongai.com/posts/tu-hoc-ve-tien-ma-hoa-cho-nguoi-moi-bat-dau-phan02-ly-do-su-da-doi-cryptocurrency/)


## Blockchain: Cơ sở dữ liệu phân tán P2P (Peer-to-Peer)

Với các đồng tiền điện tử mã hóa (Bitcoin, Ethereum,...) thì lại khác so với các hệ thống "truyền thống", chúng hoạt động dựa trên mô hình Phân tán (Peer-to-Peer viết tắt là P2P).

Thay vì "đặt ở một chỗ" (tập trung), toàn bộ **Cơ sở dữ liệu** lại được nhân bản và phân tán ra khắp nơi trên Internet. Mỗi bên tham gia (Hay được gọi là peer/node) đều giữ một bản sao giống hệt nhau. Điều đặc biệt là các bên tham gia này nhiều khi không nhất thiết phải cùng một tổ chức bên ngoài đời thực, ai muốn join mạng cũng được miễn là tuân thủ "luật chơi" của mạng. 


![btc node](/assets/2025/10/18/02_btc_nodes.png)

*Để xem chi tiết số node của Bitcoin đang Online bạn có thể xem tại đây [Số node Bitcoin](https://bitnodes.io/)*


Các **Cơ sở dữ liệu** nằm phân tán này được đồng bộ hóa với nhau theo một "luật chơi" đặc biệt - Kỹ thuật gọi là **Cơ chế đồng thuận/Consensus Mechanism** để đảm bảo tính thống nhất.

Khi có giao dịch mới, các node trong mạng sẽ đóng vai trò "cùng giám sát & kiểm tra" để đảm bảo tính hợp lệ. Sau khi đạt đồng thuận, mỗi node ghi giao dịch đó vào sổ cái phân tán của mình, đảm bảo tất cả các bản đều giống hệt nhau. Điều này khác với **Cơ sở dữ liệu** tập trung việc ghi không có bên nào giám sát mà do nhà cung cấp dịch vụ quyết định.

Việc phân tán này giải quyết được kha khá vấn đề cốt lõi của hệ thống tập trung:

* **Tính sẵn sàng cao (High Availability)**: Một máy chủ sập không ảnh hưởng hệ thống vì dữ liệu có bản sao **Cơ sở dữ liệu** đặt ở rất nhiều nơi.
* **Minh bạch và Tin cậy (Verifiability)**: Nhiều bên cùng nắm giữ bản sao **Cơ sở dữ liệu**, bất kỳ ai cũng có thể kiểm tra (nếu muốn), từ đó loại bỏ sự phụ thuộc vào một bên thứ ba duy nhất (trustless).

Tuy nhiên, **Đời mà, được cái lọ thì mất cái chai** 😅. Mô hình phân tán này cũng có **nhược điểm** mà ta dễ nhận thấy như sau:

* **Mất kiểm soát và quản lý tập trung**: Không có "ông chủ" để dễ dàng can thiệp, sửa chữa khi cần - Cái này nó là cái mà người sinh ra nó không muốn có muốn một thế giới tự do "không ai kiểm soát". Nhưng nhìn nhận lại vậy thì khá "loạn".
* **Chi phí lưu trữ cao**: Phải nhân bản dữ liệu ở hàng ngàn nơi dĩ nhiên là tốn tài nguyên (không gian lưu trữ, điện...) hơn rất nhiều.
* **Tốc độ ghi xác nhận chậm (Trong một số kịch bản đơn giản)**: Ví dụ: để xác nhận một giao dịch Bitcoin có thể mất 10 phút Trong khi giao dịch liên ngân hàng trong nước hiện tại chỉ tính bằng giây. (Dĩ nhiên đây là so sánh nếu thực hiện giao dịch trong nước chứ thực hiện giao dịch ngoài nước đặc biệt giữa 2 ngân hàng không có liên hệ trực tiếp thì tốc độ chuyển qua BTC vẫn nhanh hơn)

## Sổ cái phân tán (Distributed Ledger) và Cấu trúc Blockchain

**Cơ sở dữ liệu** được đồng bộ giữa các node "này" trong mạng Cryptocurrency người ta hay gọi nó là 👉 **Distributed Ledger (Sổ cái phân tán)**. Từ giờ tôi sẽ dùng cụm từ **Distributed Ledger** để chỉ Cơ sở dữ liệu phân tán này.

![btc node](/assets/2025/10/18/distributed_leger.jpg)


> *Sẵn tiện giới thiệu: **Ledger (Sổ cái)** là một thuật ngữ bắt nguồn trong lĩnh vực kế toán, là cuốn sổ tổng hợp ghi lại mọi nghiệp vụ Nợ/Có. Về cơ bản, blockchain là một cuốn **Sổ cái điện tử** nhưng được phân tán khắp nơi.

**Distributed Ledger** trong các hệ thống tiền mã hóa được tổ chức theo một cấu trúc đặc biệt, gọi là **Blockchain** - Chuỗi các khối dữ liệu (Blocks) liên kết chặt chẽ với nhau.

Cấu trúc này có các **đặc tính nổi bật** sau để giải quyết các bài toán "đặc biệt":

* **Tính bất biến (Immutability)**: Dữ liệu đã ghi vào một **Khối (block)** thì không thể bị sửa đổi hay xóa bỏ sau đó. Đây là chìa khóa của niềm tin.
* **Đồng bộ tự động (Automatic Synchronization)**: Các bản sao luôn tự động cập nhật và đối chiếu nhau.
* **Cơ chế Đồng thuận (Consensus Mechanism)**: "Luật chơi" chung (ví dụ: Proof-of-Work, Proof-of-Stake) giúp tất cả các nút (node) thống nhất/verify được giao dịch nào là hợp lệ và khối nào là khối mới nhất.

🎯 **Tóm lại:**

> Blockchain là cách con người tạo ra “một cuốn sổ kế toán chung cho cả thế giới”,
> nơi mọi người cùng ghi, cùng xác minh – và không cần tin ai để biết điều gì là thật.