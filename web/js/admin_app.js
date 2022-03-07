const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const body = $("body");
const btn_create = Array.from($$(".option .btn-create"));
const btn_view = Array.from($$("td.view"));
const btn_edit = Array.from($$("td.action .update"));
const admin_action = $("#admin_action");
const container_action = $(".admin_action-container");
const container_action_content = Array.from($$(".admin_action-content"));
const container_create = $(".admin_create-container");
const container_view = $(".admin_view-container");
const container_edit = $(".admin_edit-container");

const tabNameContainer = Array.from($$("#admin_main .sidebar__tab"));
const tabName = Array.from($$("#admin_main .sidebar__tab-name"));
const tabContainer = Array.from($$("#admin_main .admin__tab"));

const user = $("#user");
const userIconOption = Array.from($$(".user .fas.fa-caret-down.icon"));
const userOption = Array.from($$(".user .user__option"));

const userAvatar = Array.from($$(".user .user__avatar"));
const userViewInfo = Array.from($$(".user .view-info"));

const userValueInfo = Array.from($$("#user .value span"));
const userIconSetting = Array.from($$("#user .icon-setting"));
const userIconSetting_Close = Array.from($$("#user .icon-setting-close"));
const userEditInput = Array.from($$("#user .edit_value"));
const userEditPassword = $("#user .edit_password");
const usernameIconSetting = $("#user .user_username .icon-setting");
const t_createIconSetting = $("#user .user_time-create .icon-setting");
const userIconSummit = $("#user .user__icon-summit");

const btnCreateHistory = $("#admin__history .option .btn-create");
const btnCreateUser = $("#admin__user .option .btn-create");

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
      if (element !== btnCreateUser && element !== btnCreateHistory) {
        element.onclick = function () {
          showAdminContainer();
          showCreate();
        };
      }
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

    // Event xu ly tab
    function showTab(index) {
      tabContainer.forEach((element) => {
        element.classList.remove("active");
      });
      tabNameContainer.forEach((element) => {
        element.classList.remove("active");
      });
      tabContainer[index].classList.add("active");
      tabNameContainer[index].classList.add("active");
    }

    tabName.forEach((element, index) => {
      element.addEventListener("click", function () {
        showTab(index);
      });
    });

    // event show userOption
    function showUserOption() {
      for (let i = 0; i < userOption.length; i++) {
        userOption[i].classList.add("active");
      }
    }

    function hideUserOption() {
      for (let i = 0; i < userOption.length; i++) {
        userOption[i].classList.remove("active");
      }
    }

    userIconOption.forEach((element) => {
      element.addEventListener("click", showUserOption);
    });

    body.addEventListener("click", hideUserOption);

    userOption.forEach((element) => {
      element.onclick = function (event) {
        event.stopPropagation();
      };
    });

    userIconOption.forEach((element) => {
      element.onclick = function (event) {
        event.stopPropagation();
      };
    });

    // Event show #User
    function showUser() {
      user.classList.add("active");
    }

    function hideUser() {
      user.classList.remove("active");
    }

    userAvatar.forEach((element) => {
      element.addEventListener("click", showUser);
    });

    userViewInfo.forEach((element) => {
      element.addEventListener("click", showUser);
    });

    user.addEventListener("click", hideUser);

    $(".user-content").onclick = function (event) {
      event.stopPropagation();
    };

    // Event xu ly UserForm
    function showEditInput(index) {
      userValueInfo[index].classList.remove("active");
      userEditInput[index].classList.add("active");
      userIconSetting[index].classList.remove("active");
      userIconSetting_Close[index].classList.add("active");
      if (!userIconSummit.classList.contains("active")) {
        userIconSummit.classList.add("active");
      }
    }

    function hideEditInput(index) {
      userValueInfo[index].classList.add("active");
      userEditInput[index].classList.remove("active");
      userIconSetting[index].classList.add("active");
      userIconSetting_Close[index].classList.remove("active");
      if (userValueInfo[index] !== userEditPassword) {
        userEditInput[index].value = userValueInfo[index].innerText;
      }
      let count = 0;
      for (let i = 0; i < userIconSetting.length; i++) {
        if (userIconSetting[i].classList.contains("active")) {
          count++;
        }
      }
      if (count === userIconSetting.length) {
        if (userIconSummit.classList.contains("active")) {
          userIconSummit.classList.remove("active");
        }
      }
    }

    userIconSetting.forEach((element, index) => {
      if (element !== usernameIconSetting && element !== t_createIconSetting) {
        element.addEventListener("click", function () {
          showEditInput(index);
        });
      }
    });

    userIconSetting_Close.forEach((element, index) => {
      element.addEventListener("click", function () {
        hideEditInput(index);
      });
    });
  },
  start: function () {
    this.handleEvent();
  },
};

app.start();
