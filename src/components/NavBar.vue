<template>
    <b-navbar variant="light" id="nav">
        <b-navbar-brand>LogicFlow</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
            <b-nav-item-dropdown text="Story">
                <b-dropdown-item to="/StoryList">Story List</b-dropdown-item>
                <b-dropdown-item to="/RequirementMagage">Manage Requirements</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/Tickets">Tickets</b-nav-item>
            <b-nav-item to="/MyTask">My Task</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/UserGroup" >User Group</b-nav-item>
                <b-nav-item to="/Users" >Users</b-nav-item>
                <b-nav-item-dropdown right>
                    <template v-slot:button-content>
                        <em><img src="https://placekitten.com/g/30/30" alt="Kitten"></em>
                    </template>
                    <b-dropdown-item to="/MyProfile">Profile</b-dropdown-item>
                    <b-dropdown-item to="/MyProfile">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>