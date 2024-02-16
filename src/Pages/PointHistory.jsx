import React, { useEffect, useState } from 'react';

function PointHistory() {
  const [data, SetData] = useState()

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        apikey: 'k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be',
        userid: 'u-a2399489-9cd0-4c94-ad12-568379202b08',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc'
      }
    };

    fetch('https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp-history?page=1&limit=20', options)
      .then(response => response.json())
      .then(response => SetData(response.data))
      .catch(err => console.error(err));
  }, [])
  return (
    <div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "23px",
        justifyContent: "center",
        background: "white",
        paddingTop: "22px",
        
      }}>
        {
          data.map((res) => {
            return <>
              <p>
                {res.title}
              </p>
            </>
          })
        }
      </div>
    </div>
  );
}

export default PointHistory;
