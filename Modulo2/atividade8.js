let hobbies = [];

process.stdout.write("Digite seus hobbies (separe por vírgula): ");

process.stdin.on('data', function (data) {
    const input = data.toString().trim();
    const newHobbies = input.split(',').map(item => item.trim());

    newHobbies.forEach(hobby => {
        hobbies.push(hobby);
    });

    console.log("Seus hobbies:");
    hobbies.forEach((hobby, index) => {
        console.log(`${index + 1}. ${hobby}`);
    });

    process.exit();
});

