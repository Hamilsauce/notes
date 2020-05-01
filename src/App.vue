<template>
	<v-app>
		<!-- <header class="app-header"> -->
		<v-toolbar dense>
			<v-app-bar-nav-icon></v-app-bar-nav-icon>
			<v-toolbar-title>
				<span class="title ml-0 mr-5">
					note
					<span class="font-weight-light grey darken-2 py-2 px-1 white--text">guy</span>
				</span>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>
			<v-btn icon>
				<v-icon @click="createNote">mdi-heart</v-icon>
			</v-btn>
			<v-btn icon>
				<v-icon>mdi-dots-vertical</v-icon>
			</v-btn>
		</v-toolbar>
		<main class="app-body">
			<v-content>
				<!-- <note class="mt-4 mx-4" v-for="note in notes" :key="note.id" :note="note" /> -->
				<HelloWorld :notes="notes" @updateNote="handleUpdate" @deleteNote="deleteNote" />
			</v-content>
		</main>
	</v-app>
</template>
<script>
import HelloWorld from "./components/HelloWorld";
export default {
	name: "App",
	components: {
		HelloWorld
	},
	data() {
		return {
			activeNote: null,
			text: "Balls",
			notes: []
		};
	},
	methods: {
		initializeNotes() {
			console.log(this.text);
			this.notes = JSON.parse(localStorage.getItem("storedNotes")) || [
				{
					id: 0,
					title: "note 1",
					content: "Write a message",
					date: "4.28.2020"
				},
				{
					id: 1,
					title: "note 2",
					content: "Write a message",
					date: "4.28.2020"
				}
			];
		},
		getActiveNote() {
			this.active = !this.active;
			console.log(this.active);
		},
		createNote() {
			const newNote = {
				id: this.notes.length,
				title: "Title",
				content: "Write a note...",
				date: new Date().toLocaleString()
			};
			this.notes.push(newNote);
			localStorage.setItem("storedNotes", JSON.stringify(this.notes));
		},
		deleteNote(id) {
			this.notes.splice(id, 1);
			localStorage.setItem("storedNotes", JSON.stringify(this.notes));
		},
		handleUpdate(data) {
			let [id, modifiedNote] = data;
			const targetNote = this.notes[id];
			Object.keys(modifiedNote).forEach(key => {
				targetNote[key] = modifiedNote[key];
			});

			localStorage.setItem("storedNotes", JSON.stringify(this.notes));
		}
	},
	created() {
		this.initializeNotes();
	}
};
</script>
<style scoped>
* {
	user-select: none;
}
</style>
