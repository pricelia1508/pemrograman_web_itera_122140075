from abc import ABC, abstractmethod

# Abstract class LibraryItem
class LibraryItem(ABC):
    def __init__(self, id, title):
        self._id = id  # Protected attribute
        self._title = title  # Protected attribute

    @property
    def title(self):
        return self._title

    @abstractmethod
    def display_info(self):
        pass

# Subclass Book
class Book(LibraryItem):
    def __init__(self, id, title, author):
        super().__init__(id, title)
        self.__author = author  # Private attribute

    def display_info(self):
        print(f"Book ID: {self._id}, Title: {self._title}, Author: {self.__author}")

# Subclass Magazine
class Magazine(LibraryItem):
    def __init__(self, id, title, issue):
        super().__init__(id, title)
        self.__issue = issue  # Private attribute

    def display_info(self):
        print(f"Magazine ID: {self._id}, Title: {self._title}, Issue: {self.__issue}")

# Class Library
class Library:
    def __init__(self):
        self.__items = []  # Private attribute to store library items

    def add_item(self, item):
        self.__items.append(item)
        print(f"Item '{item.title}' added to the library.")

    def display_items(self):
        if not self.__items:
            print("No items in the library.")
        else:
            for item in self.__items:
                item.display_info()

    def search_item(self, keyword):
        results = [item for item in self.__items if keyword.lower() in item.title.lower()]
        if results:
            print("Search results:")
            for item in results:
                item.display_info()
        else:
            print("No items found with the given keyword.")

# Main function to run the library management system
if __name__ == "__main__":
    library = Library()

    while True:
        print("\nPricilia's Library Management System")
        print("Please choose an option:")
        print("1. Add Item")
        print("2. Display Items")
        print("3. Search Item")
        print("4. Exit")
        choice = input("Enter your choice: ")

        if choice == "1":
            item_type = input("Enter item type (Book/Magazine): ").strip().lower()

            while True:
                try:
                    id = int(input("Enter item ID: "))
                    break
                except ValueError:
                    print("Error: ID must be a number. Please try again.")

            title = input("Enter item title: ")

            if item_type == "book":
                author = input("Enter author name: ")
                book = Book(id, title, author)
                library.add_item(book)
            elif item_type == "magazine":
                issue = input("Enter issue: ")
                magazine = Magazine(id, title, issue)
                library.add_item(magazine)
            else:
                print("Invalid item type. Please enter 'Book' or 'Magazine'.")

        elif choice == "2":
            print("\nLibrary Items:")
            library.display_items()

        elif choice == "3":
            keyword = input("Enter keyword to search: ")
            print("\nSearch Results:")
            library.search_item(keyword)

        elif choice == "4":
            print("Exiting the system. Goodbye!")
            break

        else:
            print("Invalid choice. Please try again.")
