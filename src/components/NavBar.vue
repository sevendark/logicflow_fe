<template>
    <b-navbar variant="light" id="nav">
        <b-navbar-brand>LogicFlow</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item-dropdown text="Story">
                    <b-dropdown-item to="/StoryList">Stories</b-dropdown-item>
                    <b-dropdown-item to="/RequirementMagage">Manage Requirements</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item to="/Tickets">Tickets</b-nav-item>
                <b-nav-item to="/MyTask">My Tasks</b-nav-item>
                <b-nav-item-dropdown text="User">
                    <b-dropdown-item to="/UserGroup" >User Groups</b-dropdown-item>
                    <b-dropdown-item to="/Users" >Users</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item >
                    <b-avatar src="https://placekitten.com/320/320" size="2rem" to="/MyProfile" rounded />
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>