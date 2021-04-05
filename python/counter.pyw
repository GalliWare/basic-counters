import sys
from typing import ByteString
from PyQt5.QtWidgets import QLabel, QPushButton, QWidget, QApplication


class CounterApp(QWidget):
    def __init__(self, parent=None):
        QWidget.__init__(self, parent)
        self.count = 0
        self.setGeometry(300, 300, 50, 200)
        self.setWindowTitle('Counter')

        self.counter = QLabel("%d" % self.count, self)
        self.counter.setGeometry(10, 10, 40, 20)
        plusButton = QPushButton('+', self)
        plusButton.setGeometry(30, 40, 20, 20)
        plusButton.clicked.connect(self.plus)
        minusButton = QPushButton('-', self)
        minusButton.setGeometry(10, 40, 20, 20)
        minusButton.clicked.connect(self.minus)

    def plus(self):
        self.count += 1
        self.counter.setText("%d" % self.count)

    def minus(self):
        self.count -= 1
        self.counter.setText("%d" % self.count)


app = QApplication(sys.argv)
# setup GUI
capp = CounterApp()
capp.show()
# run application
sys.exit(app.exec_())
