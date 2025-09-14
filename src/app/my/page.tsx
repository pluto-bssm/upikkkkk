"use client";

import React from 'react';
import ProfileBox from "@/components/my/ProfileBox";
import Profile from '@/components/my/Profile/Profile';

type P = {
    auth?: 'STUDENT' | 'VISITOR';
    className?: string;
    children?: React.ReactNode;
};

const MyPage = ({ auth, className, children }: P) => {
    return (
        <>
            <Profile/>
        </>
    );
};

export default MyPage;
