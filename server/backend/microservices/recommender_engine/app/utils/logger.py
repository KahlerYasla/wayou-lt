import logging
import threading
import time
from colorama import init, Fore, Style

# Initialize colorama for colored output
init(autoreset=True)

class Logger:
    logger = logging.getLogger(__name__)
    logger.setLevel(logging.DEBUG)
    logger.propagate = False  # Prevent propagation to the root logger

    if not logger.handlers:
        formatter = logging.Formatter('%(message)s')

        # Create console handler with colored output
        console_handler = logging.StreamHandler()
        console_handler.setLevel(logging.DEBUG)
        console_handler.setFormatter(formatter)
        logger.addHandler(console_handler)

    # Define a dictionary of color options
    color_options = {
        'r': Fore.RED,
        'b': Fore.BLUE,
        'g': Fore.GREEN,
        'y': Fore.YELLOW,
        'o': Fore.LIGHTYELLOW_EX,
        'w': Fore.WHITE
    }

    @staticmethod
    def _(message, color='w'):
        Logger.logger.debug("-" * 100)
        # Check if the selected color is valid
        if color in Logger.color_options:
            color_code = Logger.color_options[color]
            lines = message.split('\n')
            for line in lines:
                Logger.logger.debug(color_code + line + Style.RESET_ALL)
        else:
            Logger.logger.debug("Invalid color option. Please select one of the available colors.")

    @staticmethod
    def log(message, color='w'):
        # Check if the selected color is valid
        if color in Logger.color_options:
            color_code = Logger.color_options[color]
            lines = message.split('\n')
            for line in lines:
                Logger.logger.debug(color_code + line + Style.RESET_ALL)
        else:
            Logger.logger.debug("Invalid color option. Please select one of the available colors.")

    @staticmethod
    def break_line():
        Logger.logger.debug("-" * 100)

    @staticmethod
    def break_double_line():
        Logger.logger.debug("=" * 100)

    @staticmethod
    # Function to print the number of active threads
    def print_active_threads():
        time.sleep(1)  # Sleep for a moment to ensure threads have started
        active_threads = threading.enumerate()
        Logger._(f"Number of active threads: {len(active_threads)}", 'r')
        for thread in active_threads:
            print(f"Thread name: {thread.name}")
        