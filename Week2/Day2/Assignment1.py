class User:
    def __init__(self, firstName, lastName, addresses):
        self.firstName = firstName
        self.lastName = lastName
        self.addresses = addresses
        addresses = []
        
        class Adress(User):
            def __init__(self, firstName, lastName, street, city, state, zip_code):
                super().__init__(firstName, lastName, addresses, [])
                self.street = street
                self.city = city
                self.state = state
                self.zip_code = zip_code
