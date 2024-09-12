Task Manager


explanations

there are three components tasks, onDelete, and onEdit. These props are passed down from the parent component.tasks is an array of task objects, each containing properties like id, title, description, dueDate, priority, and status.onDelete is a function to handle deleting a task u can see the code. onEdit is a function to handle editing a task.if tasks.length === 0 its return no task and if task length above this show your task in list.for showing task i used tasks.map() to map the task in list.
