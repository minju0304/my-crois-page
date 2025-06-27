export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <p><strong>상호명:</strong> (주)크로이스</p>
          <p><strong>대표자:</strong> 이재형</p>
          <p><strong>사업자 번호:</strong> 249-88-02464</p>
          <p><strong>이메일:</strong> crois@crois.co.kr</p>
          <p><strong>주소:</strong> 경기도 수원시 장안구 서부로 2066 85308호<br/>(성균관대학교 산학협력센터)</p>
        </div>
        <div className="footer-links">
          <a href="/company">Company</a>
          <a href="/services">Service</a>
          <a href="/solutions">Solution</a>
          <a href="/rnd">R&D</a>
        </div>
      </div>
    </footer>
  );
  }