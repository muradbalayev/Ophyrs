import React, { useState } from 'react';

const fakeCertificates = [
  {
    _id: "cert001",
    id: 1,
    certificateNumber: "OPH-FD-2024-001",
    studentId: "std123",
    studentName: 'Murad Balayev',
    email: "murad.balayev@example.com",
    course: 'Frontend Development',
    courseId: "crs456",
    issueDate: '2024-03-10',
    expiryDate: '2027-03-10',
    issueAuthority: "Ophyrs Academy",
    grade: "A",
    completionPercentage: 98,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    status: 'Valid',
    verificationLink: "https://ophyrs.com/verify/OPH-FD-2024-001",
    imageUrl: "https://example.com/certificates/cert001.jpg"
  },
  {
    _id: "cert002",
    id: 2,
    certificateNumber: "OPH-BE-2023-002",
    studentId: "std456",
    studentName: 'Aysel Aliyeva',
    email: "aysel.aliyeva@example.com",
    course: 'Backend Engineering',
    courseId: "crs789",
    issueDate: '2023-08-15',
    expiryDate: '2026-08-15',
    issueAuthority: "Ophyrs Academy",
    grade: "A-",
    completionPercentage: 95,
    skills: ["Node.js", "Express", "MongoDB", "API Design"],
    status: 'Valid',
    verificationLink: "https://ophyrs.com/verify/OPH-BE-2023-002",
    imageUrl: "https://example.com/certificates/cert002.jpg"
  },
  {
    _id: "cert003",
    id: 3,
    certificateNumber: "OPH-UX-2022-003",
    studentId: "std789",
    studentName: 'Elvin Mammadov',
    email: "elvin.mammadov@example.com",
    course: 'UI/UX Design',
    courseId: "crs101",
    issueDate: '2022-01-20',
    expiryDate: '2025-01-20',
    issueAuthority: "Ophyrs Academy",
    grade: "B+",
    completionPercentage: 89,
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    status: 'Expired',
    verificationLink: "https://ophyrs.com/verify/OPH-UX-2022-003",
    imageUrl: "https://example.com/certificates/cert003.jpg"
  },
  {
    _id: "cert004",
    id: 4,
    certificateNumber: "OPH-DS-2024-004",
    studentId: "std321",
    studentName: 'Leyla Huseynova',
    email: "leyla.huseynova@example.com",
    course: 'Data Science',
    courseId: "crs202",
    issueDate: '2024-02-01',
    expiryDate: '2027-02-01',
    issueAuthority: "Ophyrs Academy",
    grade: "A+",
    completionPercentage: 100,
    skills: ["Python", "Machine Learning", "Data Analysis", "Visualization"],
    status: 'Valid',
    verificationLink: "https://ophyrs.com/verify/OPH-DS-2024-004",
    imageUrl: "https://example.com/certificates/cert004.jpg"
  },
  {
    _id: "cert005",
    id: 5,
    certificateNumber: "OPH-CS-2021-005",
    studentId: "std654",
    studentName: 'Rashad Karimov',
    email: "rashad.karimov@example.com",
    course: 'Cybersecurity',
    courseId: "crs303",
    issueDate: '2021-06-12',
    expiryDate: '2024-06-12',
    issueAuthority: "Ophyrs Academy",
    grade: "B",
    completionPercentage: 85,
    skills: ["Network Security", "Ethical Hacking", "Cryptography", "Risk Assessment"],
    status: 'Expired',
    verificationLink: "https://ophyrs.com/verify/OPH-CS-2021-005",
    imageUrl: "https://example.com/certificates/cert005.jpg"
  },
];

const columns = [
  { field: 'id', headerName: 'Certificate ID', width: 130 },
  { field: 'studentName', headerName: 'Student Name', width: 180 },
  { field: 'course', headerName: 'Course', width: 180 },
  { field: 'issueDate', headerName: 'Issue Date', width: 130 },
  { field: 'expiryDate', headerName: 'Expiry Date', width: 130 },
  {
    field: 'status',
    headerName: 'Status',
    width: 110,
    renderCell: (params) => (
      <span style={{
        color: params.value === 'Valid' ? '#388e3c' : '#d32f2f',
        fontWeight: 600,
      }}>
        {params.value}
      </span>
    ),
  },
];

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  background: '#fff',
  borderRadius: '12px',
  overflow: 'hidden',
};

const thStyle = {
  background: '#f5f5f5',
  fontWeight: 700,
  color: "black",
  padding: '14px',
  textAlign: 'left',
  fontSize: '1rem',
  borderBottom: '1.5px solid #e0e0e0',
};

const tdStyle = {
  padding: '12px',
  color: "black",
  borderBottom: '1px solid #ececec',
  fontSize: '0.98rem',
};

const statusStyle = (status) => ({
  color: status === 'Valid' ? '#388e3c' : '#d32f2f',
  fontWeight: 600,
  borderRadius: '6px',
  padding: '4px 10px',
  background: status === 'Valid' ? '#e8f5e9' : '#ffebee',
  display: 'inline-block',
  fontSize: '0.95rem',
});

const containerStyle = {
  width: '100%',
  margin: '36px auto',
  padding: '24px',
};

const titleStyle = {
  fontSize: '1.5rem',
  fontWeight: 700,
  color: "black",
  marginBottom: '18px',
};


const AdminCertificatePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleRowClick = (cert) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>Certificate Management</div>
      <div style={{overflowX: 'auto', borderRadius: '12px'}}>
        <style>{`
          .admin-cert-table tr:hover {
            background: #f0f7fa;
            transition: background 0.2s;
            cursor: pointer;
          }
          .custom-modal-overlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.45);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .custom-modal {
            background: #fff;
            border-radius: 18px;
            padding: 40px 32px 28px 32px;
            min-width: 350px;
            max-width: 95vw;
            width: 440px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.18);
            position: relative;
            animation: modalIn 0.2s;
          }
          @keyframes modalIn {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .modal-close-btn {
            position: absolute;
            top: 18px;
            right: 22px;
            background: none;
            border: none;
            font-size: 1.6rem;
            color: #888;
            cursor: pointer;
            transition: color 0.18s;
          }
          .modal-close-btn:hover { color: #d32f2f; }
          .modal-title {
            font-size: 1.35rem;
            font-weight: 700;
            margin-bottom: 18px;
            color: #222;
            text-align: center;
          }
          .modal-detail-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 14px;
            font-size: 1.05rem;
          }
          .modal-detail-label {
            color: #666;
            font-weight: 600;
          }
          .modal-detail-value {
            color: #222;
            font-weight: 500;
          }
        `}</style>
        <table style={tableStyle} className="admin-cert-table">
          <thead>
            <tr>
              <th style={thStyle}>Certificate ID</th>
              <th style={thStyle}>Student Name</th>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Issue Date</th>
              <th style={thStyle}>Expiry Date</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {fakeCertificates.map(row => (
              <tr key={row.id} onClick={() => handleRowClick(row)}>
                <td style={tdStyle}>{row.id}</td>
                <td style={tdStyle}>{row.studentName}</td>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.issueDate}</td>
                <td style={tdStyle}>{row.expiryDate}</td>
                <td style={tdStyle}><span style={statusStyle(row.status)}>{row.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalOpen && selectedCert && (
  <div className="custom-modal-overlay" onClick={closeModal}>
    <div className="custom-modal" style={{background: 'transparent', boxShadow: 'none', padding: 0}} onClick={e => e.stopPropagation()}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Roboto:wght@400;700&display=swap');
        .certificate-box {
          background: #fffefb;
          border: 5px solid #e0c78c;
          border-radius: 24px;
          padding: 44px 38px 38px 38px;
          min-width: 360px;
          max-width: 98vw;
          width: 500px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.18);
          position: relative;
          font-family: 'Roboto', serif;
        }
        .certificate-seal {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f5d060 60%, #e0c78c 100%);
          border: 3px solid #e0c78c;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: -34px;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .certificate-seal-icon {
          font-size: 2.5rem;
          color: #bfa13b;
        }
        .certificate-title {
          font-family: 'Great Vibes', cursive;
          font-size: 2.2rem;
          color: #bfa13b;
          text-align: center;
          font-weight: 700;
          margin-bottom: 10px;
          margin-top: 22px;
        }
        .certificate-org {
          text-align: center;
          font-size: 1.05rem;
          color: #888;
          margin-bottom: 14px;
        }
        .certificate-body {
          margin-top: 26px;
          margin-bottom: 18px;
          text-align: center;
        }
        .certificate-name {
          font-family: 'Great Vibes', cursive;
          font-size: 2rem;
          color: #3e2e13;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .certificate-course {
          font-size: 1.2rem;
          color: #1a1a1a;
          font-weight: 500;
          margin-bottom: 12px;
        }
        .certificate-dates {
          display: flex;
          justify-content: space-between;
          margin: 18px 0 6px 0;
          font-size: 1.02rem;
          color: #666;
        }
        .certificate-id {
          position: absolute;
          bottom: 20px;
          left: 38px;
          font-size: 0.98rem;
          color: #bfa13b;
          font-weight: 600;
        }
        .certificate-status {
          position: absolute;
          bottom: 20px;
          right: 38px;
        }
        .modal-close-btn {
          position: absolute;
          top: 18px;
          right: 22px;
          background: none;
          border: none;
          font-size: 1.6rem;
          color: #888;
          cursor: pointer;
          transition: color 0.18s;
          z-index: 2;
        }
        .modal-close-btn:hover { color: #d32f2f; }
      `}</style>
      <button className="modal-close-btn" onClick={closeModal}>&times;</button>
      <div className="certificate-box">
        <div className="certificate-seal">
          <span className="certificate-seal-icon" role="img" aria-label="seal">🎓</span>
        </div>
        <div className="certificate-title">Certificate of Achievement</div>
        <div className="certificate-org">Ophyrs Academy</div>
        <div className="certificate-body">
          This is to certify that
          <div className="certificate-name">{selectedCert.studentName}</div>
          has successfully completed the course
          <div className="certificate-course">{selectedCert.course}</div>
        </div>
        <div className="certificate-dates">
          <span>Issued: <b>{selectedCert.issueDate}</b></span>
          <span>Expires: <b>{selectedCert.expiryDate}</b></span>
        </div>
        <div className="certificate-id">ID: {selectedCert.id}</div>
        <div className="certificate-status">{statusStyle ? <span style={statusStyle(selectedCert.status)}>{selectedCert.status}</span> : selectedCert.status}</div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}

export default AdminCertificatePage
