document.getElementById('generate').addEventListener('click', () => {
    const prophecies = [
      "The stars align, yet the abyss remains deep.",
      "Blockchain whispers truths only madness comprehends.",
      "Cthulhu stirs, and tokens follow his wake.",
      "In the depths, secrets lurk; in the light, they burn.",
      "A ledger eternal, a tentacle infinite.",
      "The unknowable writes in code we barely grasp.",
      "Chaos and order: twin lies of the cosmic blockchain."
    ];
    const prophecy = prophecies[Math.floor(Math.random() * prophecies.length)];
    document.getElementById('prophecy').innerText = prophecy;
  });
  