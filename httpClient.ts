const request = require('request');

// console.log(request);

let options = {
    url:'http://localhost:8080',
    method:'POST',
    // data:{"name":"zhangsan","age":18}
    form:{"name":"zhangsan","age":18}
}

request(options,function (error,response,body) {
    console.log(body);})

const image:string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAACXBIWXMAAAsTAAALEwEAmpwYAAA59GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzIgNzkuMTU5Mjg0LCAyMDE2LzA0LzE5LTEzOjEzOjQwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChXaW5kb3dzKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAyMi0wOS0wN1QwNjoxMDo1MiswOTowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjItMDktMDdUMDY6MTA6NTIrMDk6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDIyLTA5LTA3VDA2OjEwOjUyKzA5OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDo0M2M3ZmVlNi0xMmZjLTg0NDItOWMyZi0zZjQwNjI2NWEyNDI8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1OWZjZTBiMS0yZTI4LTExZWQtYmVjMy05Nzc5MmY1ZTI1MzE8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo1YTVhM2M3MS0yYmZhLTc0NDMtYmQ1OC0yNDIwMzBkMzg2NTQ8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6NWE1YTNjNzEtMmJmYS03NDQzLWJkNTgtMjQyMDMwZDM4NjU0PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIyLTA5LTA3VDA2OjEwOjUyKzA5OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6NDNjN2ZlZTYtMTJmYy04NDQyLTljMmYtM2Y0MDYyNjVhMjQyPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIyLTA5LTA3VDA2OjEwOjUyKzA5OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MzAwPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjMwMDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+IFmmigAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAfDElEQVR42uydebRdVX3HP/u+KaMJkEgClMEoIFUBW6fWqojzVCdUhGoBSQVxQKVdq3YtO9hKkSUooIAKWpG5VhRQHABBRkFQgoCGEEMwATK+JC9vuPfu/vHbx3vyCJD33r337H3O97PWW48xeTn3nM/57d/+7d/Pee8RQogUqOkSCCEkLCGEkLCEEBKWEEJIWEIIIWEJISQsIYSQsIQQQsISQkhYQgghYQkhhIQlhJCwhBBCwhJCCAlLCCFhCSGEhCWEEBKWEELCEkIICUsIISQsIYSEJYQQEpYQQkhYQggJSwghJCwhhJCwhBASlhBCSFhCCAlLCCEkLCGEkLCEEBKWEEJIWEII0RZ6dQm6gHMd/dXx3usiCwlLRKvAP/2VZCW0JBSRy8pJVkIRlkhDVJKVkLBE5JFwJiuP901dEiFhiVijqmzp3pSsRNXf3CJuWTnJSghFWFNQiev47zAu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"

let post_data = JSON.stringify({'image':image});

let options2 = {
    url:'http://localhost:8080',
    method:'POST',
    headers:{
        'Content-Type':'application/json',
        'content-length':Buffer.byteLength(post_data)
}
}

let req = request(options2,(res)=>{
    console.log(res);
    // issue: res is null
    if (res != null) {
    res.on('error',(err)=>{
        console.log(err);
    }).on('data',(chunk)=>{
        console.log(`resBody:${chunk.toString()}`);
    }).on('end',()=>{
        console.log('end');
    })
    }
})

req.write(post_data);
req.end();