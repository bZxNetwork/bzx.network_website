$(document).ready(function () {

  if (window.app) {
    window.app.setup();

  }

  if (document.getElementById('modal')) {
    window.modal = new RModal(
      document.getElementById('modal'), { closeTimeout: 0 }
    );



    $(".join-mailing-list").on("click", function (e) {
      e.preventDefault();
      modal.open();
    });

    $("#modal .close").on("click", function (e) {
      e.preventDefault();
      modal.close();
    });
  }

  $(".item-team").each(function (index, item) {
    var trigger = $(item).find(".info");
    var template = `
    <div class="tooltip" role="tooltip">
      <div class="tooltip-arrow"></div>
      <div class="mb-25 header">
        <div  class="close" >
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.50009 9.91421L15.293 16.7071L16.7072 15.2929L9.9143 8.5L16.7072 1.70712L15.293 0.292906L8.50009 7.08578L1.70718 0.292877L0.292969 1.70709L7.08588 8.5L0.292969 15.2929L1.70718 16.7071L8.50009 9.91421Z" fill="#00C0AB"/>
          </svg>
        </div>
        <h4 class="fs-22 ln-150 color-primary tooltip-inner"></h4>
      <span class="fs-14 lh-160 bio">${trigger.data("bio")}<span>
      </div>
      <div class="color-primary fs-14 lh-180">
        ${trigger.data("info")}
      </div>
    </div>`;
    var tooltip = new Tooltip(trigger, {
      title: trigger.data("name"),
      trigger: "click",
      html: true,
      template: template,
      placement: "right",
      container: $(".container-team")[0],
      boundariesElement: $(".container-team")[0],
      closeOnClickOutside: true
    });


    $(".container-team").on("click", ".tooltip .header .close", function (e) {
      if (tooltip._isOpen) {
        tooltip.hide();
      }
    })

    $(trigger).on("click", function (e) {
      e.preventDefault();

    })
  });


  Array.from(document.querySelectorAll(".buttons-tabs .tablinks")).forEach(elem => {
    elem.addEventListener("click", function (e) {
      if (!window.isHistoryAnimationFinished) return; //

      var newYear = e.currentTarget.dataset.year;
      var i;
      var prevnewYear = parseInt(document.querySelector(".tablinks.active").dataset.year);
      var tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].className = tabcontent[i].className.replace(" active", "");
      }
      var tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(newYear).style.display = "block";
      document.getElementById(newYear).className += " active";
      e.currentTarget.className += " active";
      if (targetHistory && window.innerWidth > 1109)
        invokeHistoryAnimation(prevnewYear, newYear);
    });
  });
});