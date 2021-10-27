import matplotlib.pyplot as plt
import numpy as np

np.random.seed(11)
random_walk = [0]

for x in range(25):
    step = random_walk[-1]
    dice = np.random.randint(1, 7)

    if dice <= 2:
        step = max(0, step - 1)
    elif dice <= 5:
        step = step + 1
    else:
        step = step + np.random.randint(1, 7)
    random_walk.append(step)
plt.plot(random_walk)
plt.show()
