class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callbackAction) {
		if (!time) {
			throw new Error('Время должно быть передано');
		}

		if (!callbackAction) {
			throw new Error('Функция-коллбэк должна быть передана');
		}

		if (
			this.alarmCollection.some(
				(alarm) =>
					alarm.time === time && alarm.callback === callbackAction
			)
		) {
			console.warn('Будильник на это время уже существует');
			return;
		}

		const alarm = {
			time: time,
			callback: callbackAction,
			canCall: true,
		};

		this.alarmCollection.push(alarm);
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(
			(alarm) => alarm.time !== time
		);
	}

	getCurrentFormattedTime() {
		const now = new Date();
		const hours = now.getHours().toString().padStart(2, '0');
		const minutes = now.getMinutes().toString().padStart(2, '0');
		return `${hours}:${minutes}`;
	}

	start() {
		if (this.intervalId != null) {
			return;
		}

		this.intervalId = setInterval(() => {
			const currentTime = this.getCurrentFormattedTime();

			this.alarmCollection.forEach((alarm) => {
				if (alarm.time === currentTime && alarm.canCall) {
					alarm.callback();
					alarm.canCall = false;
				}
			});
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach((alarm) => (alarm.canCall = true));
	}

	clearAlarms() {
		this.alarmCollection = [];
		this.stop();
	}
}
