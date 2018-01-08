(function ($) {
	const socket = io.connect();
	const $messageForm = $('#message-form');
	const $message = $('#message');
	const $chat = $('#chat');
	const $messageArea = $('#message-area');
	const $userForm = $('#user-form');
	const $users = $('#users');
	const $onlineUsersHeader = $('#online-users-header');
	const $username = $('#username');

	// 메세지 보내기
	$messageForm.submit((e) => {
		e.preventDefault();
		// 이벤트 emit
		socket.emit('send message', $message.val());
		$message.val('');
	});
	// 메세지 보낼때 사용자 이름과 시간 출력
	socket.on('new message', function (data) {
		const currentHours = new Date().getHours() > 9 ? new Date().getHours() : ('0' + new Date().getHours());
		const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : ('0' + new Date().getMinutes());
		data.msg ? (
				$chat.append(`<li>[${currentHours}:${currentMinutes}]<strong> ${data.user}: </strong>${data.msg}</li>`))
			: alert('Blank message not allow!');
	});
	// 사용자 이름 등록
	$userForm.submit(function (e) {
		e.preventDefault();
		socket.emit('new user', $username.val(), (data) => {
			data ? (
				$userForm.hide(),
					$messageArea.show()
			) : alert('Ohps. What\'s your name!')
		});
		$username.val('');
	});

	socket.on('get userList', function (data) {
		let html = '';
		for (i = 0; i < data.length; i++) {
			html += `<li class="list-item"><strong>${data[i]}</strong></li>`;
		}
		$onlineUsersHeader.html(`<span class="card-title"> Users in the room: </span><span class="label label-success">${data.length}</span>`);
		$users.html(html);
	});


})(jQuery);
