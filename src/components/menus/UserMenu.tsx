'use client';

import React from 'react';

const UserMenu = ({ user, isAdmin }: { user: string; isAdmin: boolean }) => {
	console.info(user, isAdmin);
	return <div>UserMenu</div>;
};

export default UserMenu;
