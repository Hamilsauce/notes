<template>
	<main @click="activateNote" class="note" :class="{ activeNote: isActive === true }">
		<section :class="{ show: isActive }" class="note-toolbar">
			<div class="toolbar-left">
				<div class="button" @click="pinNote">
					<v-icon color="rgba(50,50,50,0.5)">mdi-pin</v-icon>
				</div>
			</div>
			<div class="toolbar-right">
				<div class="button" @click="deactivateNote">
					<v-icon color="rgba(50,50,50,0.5)">mdi-check-bold</v-icon>
				</div>

				<div class="button" @click="deleteNote">
					<v-icon color="rgba(50,50,50,0.5)">mdi-delete</v-icon>
				</div>
			</div>
		</section>
		<div
			class="note-title"
			@click="selectText"
			@dblclick="deselectText"
			@keyup="mapUserInputs"
			contenteditable="true"
		>{{ note.title }}</div>
		<div
			class="note-content"
			@click="selectNoteContent"
			@keyup="mapUserInputs"
			contenteditable="true"
		>{{ note.content }}</div>
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
			userInputs: {
				title: null,
				content: null
			},
			modifiedNote: {},
			gotClicked: false,
			lastEdit: null
		};
	},
	methods: {
		activateNote() {
			//! notifies parent that note is active due to being clicked
			if (this.isActive === false) {
				this.$emit("noteActivated", this.note.id);
			}
		},
		deactivateNote() {
			//! notifies parent that note is active due to being clicked
			setTimeout(() => {
				this.$emit("deactivateNote", this.note.id);
			}, 100);
		},

		mapUserInputs(e) {
			//! maps div textcontent as user inputs to a reactive object binding (since vue doesnt support contenteditable)
			let input = e.target.textContent;
			console.log(e.target.textContent);
			if (e.target.classList.contains("note-title")) {
				this.userInputs.title = input;
			} else if (e.target.classList.contains("note-content")) {
				this.userInputs.content = input;
			}
		},

		validateAndCommitChanges(userActivity) {
			//! takes an array of fields that the user made changes to, and adds those properties/values to modified note (avoids updating data that wasnt changed)
			if (Array.isArray(userActivity) === false) {
				let paramType = typeof userActivity;
				console.error(`Expected array, received ${paramType}`);
				return;
			}
			if (userActivity[0] === "none") {
				return;
			} else {
				userActivity.forEach(el => {
					this.modifiedNote[el] = this.userInputs[el];
				});
				this.modifiedNote.date = new Date().toLocaleString();
			}
		},

		saveChanges() {
			if (Object.keys(this.modifiedNote).length > 0) {
				const noteUpdates = [this.note.id, this.modifiedNote];
				this.$emit("updateNote", noteUpdates);
				console.log("sending changes from note");

				for (const key in this.modifiedNote) {
					delete this.modifiedNote[key];
					this.userInputs[key] = null;
				}
				return;
			} else {
				console.log("no updates made, nothing sent");
				return;
			}
		},
		deleteNote() {
			this.$emit("deleteNote", this.note.id);
		},
		pinNote() {},
		selectText(e) {
			let wSelection = window.getSelection();
			if (wSelection.toString().length > 0) {
				this.deselectText();
			} else {
				let el = e.target;
				if (document.body.createTextRange) {
					let range = document.body.createTextRange();
					range.moveToElementText(el);
					range.select();
				} else if (window.getSelection) {
					let selection = window.getSelection();
					let range = document.createRange();
					range.selectNodeContents(el);
					selection.removeAllRanges();
					selection.addRange(range);
				}
			}
		},
		deselectText() {
			// let el = e.target;
			let wSelection = window.getSelection();
			// wSelection.removeAllRanges();
			wSelection.collapseToEnd();
		},

		selectNoteContent(e) {
			const el = e.target;
			console.log(el);

			if (el.textContent === "Write a note...") {
				console.log(el.textContent);

				el.textContent = "";
			}
		}
	},

	computed: {
		isActive() {
			const status = this.activeNoteId == this.note.id ? true : false;
			return status;
		},

		userActivity() {
			//!whnever an input changes, this outputs array of inputs that changed
			if (this.userInputs.title === null && this.userInputs.content === null) {
				return ["none"];
			} else if (
				this.userInputs.title === null &&
				this.userInputs.content !== null
			) {
				return ["content"];
			} else if (
				this.userInputs.title !== null &&
				this.userInputs.content === null
			) {
				return ["title"];
			} else {
				return ["title", "content"];
			}
		}
	},
	watch: {
		userActivity: function(newVal) {
			if (newVal[0] !== "none") {
				this.validateAndCommitChanges(newVal);
			}
		},
		isActive: function(val) {
			if (val === false) {
				this.saveChanges();
			}
		}
	},
	created() {},
	mounted() {},
	updated() {},
	destroyed() {}
};
</script>

<style scoped>
.note {
	display: grid;
	grid-gap: 3px;
	color: #424242;
	transition: 0.5s;
	padding: 5px 0px 0px 0px;
	box-shadow: 0px 2px 0px 2px rgba(121, 121, 121, 0.596);
	background: rgba(255, 255, 255, 0.897);
	border: 1px solid rgba(100, 100, 100, 0.637);
	opacity: 0.9;
}
.activeNote {
	outline: none;
	color: #2e2e2e;

	margin: 5px auto;
	padding-bottom: 0px;
	transition: 0.5s;
	transform: scale(1.05);
	box-shadow: 0px 3px 0px 2px rgb(100, 100, 100);
	opacity: 1;
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
	transition: 0.2s;
}

.note-toolbar > button {
	padding: 5px auto 0px auto;
	margin: auto 7px;
	color: #b4b4b480;
	font-weight: 300;
	font-size: 0.7em;
	letter-spacing: 2px;
	text-transform: lowercase;
	z-index: 2;
}

.note-toolbar.show {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-content: center;
	display: grid;
	grid-template-columns: 1fr 1fr;
	height: 20px;
	opacity: 0.9;
}
.toolbar-left {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	width: 100%;
	height: fit-content;
	padding: 0px 3px;
	margin: 0;
}
.toolbar-right {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	width: 100%;
	height: fit-content;
	padding: 0px 3px;
	margin: 0;
}
.button {
	margin: 0px 5px;
	padding: 0px 3px;
	cursor: pointer;
	font-size: 0.9em;
	letter-spacing: 1px;
}
v-icon:hover {
	color: rgba(40, 40, 40, 0.6);
}
.doneButtonActive {
	color: rgb(0, 0, 0);
}
.note-date {
	text-align: right;
	color: #363636af;
	font-weight: 300;
	padding-top: 3px;
	padding-right: 5px;
	font-size: 0.8em;
}

.note-title {
	background: white;
	display: block;
	font-size: 28px;
	padding: 8px 10px;
	color: rgba(105, 105, 105, 0.8);
	caret-color: rgb(90, 90, 90);
	outline: none;
}
.note-title:hover {
	font-size: 28px;
	color: rgba(61, 61, 61, 0.8);
	transition: 0.4s;
}
.note-title:focus {
	color: rgb(87, 87, 87);
	transition: 0.2s;
}

.note-content {
	caret-color: rgb(90, 90, 90);
	padding: 10px;
	margin: auto 5px;
	padding-top: 10px;
	min-height: 50px;
	font-size: 18px;
	font-weight: 300;
	color: rgb(121, 121, 121);
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
.note:focus-within {
	/* outline: none;
	color: #363636;
	margin: 5px 0px;
	transition: 0.5s;
	transform: scale(1.05);
	box-shadow: 0px 3px 0px 2px rgba(71, 71, 71, 0.644); */
}

.doneButtonActive {
	color: rgb(0, 0, 0);
	opacity: 1;
}
</style>
