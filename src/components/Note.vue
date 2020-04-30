<template>
	<main @click="handleClick" class="note" :class="{ active: isActive === true }">
		<div :class="{ show: isActive }" class="note-toolbar">
			<div class="button">Save</div>
			<div class="button">Delete</div>
		</div>
		<div class="note-title" @keyup="getUserInput" contenteditable="true">{{ note.title }}</div>
		<div class="note-content" @keyup="getUserInput" contenteditable="true">{{ note.content }}</div>
		<div class="note-date" contenteditable="false">{{ note.date }}</div>
	</main>
</template>

<script>
export default {
	name: "Note",
	components: {},
	props: {
		note: Object,
		activeNoteId: undefined
	},
	data() {
		return {
			modifiedNote: {
				title: "",
				content: "",
				date: new Date().toLocaleString(),
				id: this.note.id
			},
			active: false,
			gotClicked: false,
			lastEdit: ""
		};
	},
	methods: {
		handleClick() {
			this.$emit("noteClicked", this.note.id);
			this.title = "i got clicked";
			// this.activeNoteId = this.note.id;
		},
		getUserInput(e) {
			let input = e.target.textContent;
			console.log(e.target.textContent);
			if (e.target.classList.contains("note-title")) {
				this.modifiedNote.title = input;
			} else if (e.target.classList.contains("note-content")) {
				this.modifiedNote.content = input;
			}
		},
		// saveChanges() {
		// 	this.modifiedNote.title = document.querySelector('.note-title').textContent;
		// 	this.modifiedNote.content = document.querySelector('.note-content').textContent;
		// 	this.modifiedNote.date = document.querySelector('.note-date').textContent;
		// 	const noteUpdates = [this.note.id, this.modifiedNote];
		// 	this.$emit("updateNote", noteUpdates);
		// },
		autoSave() {
			setInterval(() => {
				const noteUpdates = [this.note.id, this.modifiedNote];
				this.$emit("updateNote", noteUpdates);
				console.log("saved");
			}, 5000);
		}
	},
	computed: {
		isActive() {
			const status = this.activeNoteId == this.note.id ? true : false;
			return status;
		}
	},
	watch: {
		isActive: function(newVal) {
			if (newVal === false) {
				const noteUpdates = [this.note.id, this.modifiedNote];
				this.$emit("updateNote", noteUpdates);
			}
		}
	},
	created() {},
	mounted() {
		this.modifiedNote = this.note;
	},
	updated() {},
	destroyed() {}
};
</script>

<style scoped>
/* html {
	font-family: "Helevetica", sans-serif;
} */

/* body {
	color: #25252580;
	font-weight: 400;
	max-width: 50em;
	background: rgba(235, 240, 250, 0.5);
	margin: 0 auto;
} */

.active {
	outline: none;
	color: #363636;
	margin: 5px 0px;
	transition: 0.5s;
	transform: scale(1.05);
	box-shadow: 0px 3px 0px 2px rgba(71, 71, 71, 0.644);
}
/* .collection {
	display: grid;
	gap: 10px;
} */
/*
#app {
	position: relative;
	height: 100vh;
	padding: 0px 0px 20px 0px;
} */
/*
.app-header {
	position: sticky;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0px 10px 0px 0px;
	height: 40px;
	background: white;
	border-top: 1px solid #00000040;
	border-bottom: 1px solid #00000040;
	box-shadow: 0px 3px 10px 1px rgba(100, 100, 100, 0.4);
} */

.title {
	padding: 5px 2px 0px 5px;
	margin: 0px;
	color: #ffffff;
	font-weight: 800;
	font-size: 1.4em;
	letter-spacing: 2px;
	background: #36363690;
	border-right: 1px solid #36363640;
}

.app-menu {
	display: flex;
	flex-direction: row;
	padding: 0px 5px 5px 5px;
	margin: 5px;
}

.app-menu > button {
	font-size: 1.3em;
	font-weight: 600;
}

.page {
	display: grid;
	padding: 10px;
	grid-gap: 15px;
	overflow: auto;
	max-height: 100%;
}

.note {
	display: grid;
	grid-gap: 3px;
	background: white;
	/*max-height: 426px;*/
	transition: 0.5s;
	padding: 5px;
	box-shadow: 0px 3px 0px 1px rgba(119, 119, 119, 0.5);
	background: rgba(255, 255, 255, 1);
	border: 1px solid rgba(100, 100, 100, 0.2);
}

.note-toolbar {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	justify-items: center;
	align-items: center;
	width: 100%;
	height: 0px;
	opacity: 0;
	overflow: hidden;
	transition: 0.3s ease;
}

.note-toolbar.show {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-content: center;
	height: 15px;
	opacity: 0.6;

	/* width: min-content; */
}

.button {
	/* display: block; */
	margin: 0px 5px;
	padding: 0px 5px;
	cursor: pointer;
}

.note-toolbar > button {
	padding: 5px auto 0px auto;
	margin: auto 7px;
	color: #b4b4b480;
	font-weight: 300;
	font-size: 0.5em;
	letter-spacing: 2px;
	text-transform: lowercase;
}

.note-date {
	text-align: right;
	color: #36363670;
	font-weight: 300;
	padding-top: 3px;
}

.note-title {
	font-size: 28px;
	padding: 8px 10px;
	color: rgba(126, 126, 126, 0.8);
	outline: none;
}
.note-title:hover {
	font-size: 28px;
	padding: 8px 15px;
	color: rgba(109, 109, 109, 0.8);
	padding-left: 15px;
	transition: 0.4s;
}
.note-title:focus {
	color: rgb(109, 109, 109);
	transition: 0.2s;
}
.note:focus-within {
	outline: none;
	color: #363636;
	margin: 5px 0px;
	transition: 0.5s;
	transform: scale(1.05);
	box-shadow: 0px 3px 0px 2px rgba(71, 71, 71, 0.644);
}

.note-content {
	padding: 10px;
	padding-top: 10px;
	min-height: 50px;
	font-size: 18px;
	font-weight: 300;
	color: rgba(150, 150, 150, 1);
	border-top: 1px solid rgba(125, 125, 125, 0.2);
	transition: 0.4s;
	overflow: hidden;
}

.note-content:hover {
	padding-left: 15px;
	font-size: 18px;

	border: 1px solid rgba(135, 125, 125, 0.2);
	color: rgb(83, 83, 83);
}
</style>
