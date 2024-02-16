import React from 'react';
import { RiHomeFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { IoBagCheck } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function UserNavigation() {
    return (
        <div>
            <div style={{
                display: 'flex',
                padding: '14px',
                gap: '66px',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                borderRadius: '12px',
                
                bottom: '45',
                
                width: '100%',
                justifyContent: 'center',
               
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
