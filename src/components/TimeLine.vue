<template>
    <div class="timeline" >
        <table>
            <tr>
                <td>[<span class="text-primary">INFO</span>]</td>
                <td>2020,07,08 01:00:00</td>
                <td>Timothy update</td>
            </tr>
            <tr>
                <td>[<span class="text-primary">INFO</span>]</td>
                <td>2020,07,08 01:00:00</td>
                <td>Timothy update</td>
            </tr>
            <tr>
                <td>[<span class="text-warning">WARN</span>]</td>
                <td>2020,07,08 01:00:00</td>
                <td>Timothy update</td>
            </tr>
            <tr>
                <td>[<span class="text-danger">ERROR</span>]</td>
                <td>2020,07,08 01:00:00</td>
                <td>Timothy update</td>
            </tr>
            <tr>
                <td>[<span class="text-primary">INFO</span>]</td>
                <td>2020,07,08 01:00:00</td>
                <td>Timothy update</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>

.timeline {
 overflow-y: scroll;
 height: 8em;
 background-color: #282c34;
 color: rgb(196, 196, 196);
 font-size: 0.5em;
 padding: 0.5em;
}

li {
 list-style: none;
}

ul {
    margin: 0;
    padding: 0;
}
</style>