# internet-network
## 1. IP (Internet Protocol)
- 지정한 IP 주소에 데이터를 전달함
- Packet이라는 하나의 통신 단위로 데이터를 전달함
- IP 패킷은 보내려는 전송데이터를 출발지 IP와 목적지 IP, 그 외의 정보들로 패킹해서 보낸다.
### IP 프로토콜의 한계
1. 비연결성
- 패킷을 받을 대상이 없거나 서비스 불능 상태여도 패킷을 전송함
2. 비신뢰성
- 중간에 패킷이 사라지면?
- 패킷이 순서대로 안오면?
3. 프로그램의 구분
- 같은 IP를 사용하는 서버에서 통신하는 애플리케이션이 둘 이상이면?
- 