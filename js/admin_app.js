const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const btn_create = Array.from($$(".option .btn-create"));
const btn_view = Array.from($$("td.view"));
const btn_edit = Array.from($$("td.action .update"));
const admin_action = $("#admin_action");
const container_action = $(".admin_action-container");
const container_action_content = Array.from($$(".admin_action-content"));
const container_create = $(".admin_create-container");
const container_view = $(".admin_view-container");
const container_edit = $(".admin_edit-container");

const app = {
  handleEvent: function () {
    // Event for admin action
    function showAdminContainer() {
      admin_action.classList.add("active");
    }

    function hideAdminContainer() {
      admin_action.classList.remove("active");
      const child_action = Array.from(container_action.children);
      child_action.forEach((element) => {
        element.classList.remove("active");
      });
    }

    function showView() {
      container_view.classList.add("active");
    }
    function showEdit() {
      container_edit.classList.add("active");
    }
    function showCreate() {
      container_create.classList.add("active");
    }

    btn_view.forEach((element) => {
      element.onclick = function () {
        showAdminContainer();
        showView();
      };
    });

    btn_create.forEach((element) => {
      element.onclick = function () {
        showAdminContainer();
        showCreate();
      };
    });

    btn_edit.forEach((element) => {
      element.onclick = function () {
        showAdminContainer();
        showEdit();
      };
    });

    admin_action.addEventListener("click", hideAdminContainer);
    container_action_content.forEach((element) => {
      element.onclick = function (event) {
        event.stopPropagation();
      };
    });
  },
  start: function () {
    this.handleEvent();
  },
};

app.start();
