import React from 'react';
import { RiHomeFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { IoBagCheck } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function UserNavigation() {
    return (
        <div>
            <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                padding: '14px',
                gap: "66px",
                borderRadius: '12px',
             

            }}>
                <div><RiHomeFill /></div>
                <div><IoSearch />
                </div>
                <div>
                    <IoBagCheck />

                </div>
                <div>
                    <CgProfile />

                </div>
            </div>
        </div>
    );
}

export default UserNavigation;
