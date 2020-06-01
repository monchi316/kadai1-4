'user strict'

const tasks = [{ content: '机を片付ける', genre: '掃除' }, { content: '牛乳を買う', genre: '買い物' }, { content: '散歩する', genre: '運動' }];

function task() {
  console.log('========================');
  console.log('現在持っているタスク');
  console.log('========================');

  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i}:[内容]${tasks[i].content}、[ジャンル]${tasks[i].genre}`);
  }
}

task();

tasks.push({ content: prompt('内容を入力して下さい'), genre: prompt('ジャンルを入力して下さい') });
alert('タスクを追加しました');

task();
