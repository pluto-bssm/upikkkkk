"use client";

import React from 'react';
import ProfileBox from "@/components/my/ProfileBox";
import ProfileInfo from '@/components/my/ProfileInfo/ProfileInfo';

type P = {
    auth?: 'STUDENT' | 'VISITOR';
    className?: string;
    children?: React.ReactNode;
};

const MyPage = ({ auth, className, children }: P) => {
    return (
        <>
            <ProfileInfo/>
        </>
    );
};

export default MyPage;
