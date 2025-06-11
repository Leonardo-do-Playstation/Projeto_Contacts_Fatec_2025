package br.gov.sp.fatec.itu.projeto_contatos.Controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.gov.sp.fatec.itu.projeto_contatos.Entities.Contact;
import br.gov.sp.fatec.itu.projeto_contatos.Services.ContactService;

@RestController
@RequestMapping("/contacts")
@CrossOrigin
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping
    public ResponseEntity<Contact> save(@RequestBody Contact contact) {
        Contact savedContact = contactService.save(contact);

        URI location = ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(savedContact.getId())
            .toUri();

        return ResponseEntity.created(location).body(savedContact);
    }

    @GetMapping
    public List<Contact> getAllContacts() {
        return contactService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Contact> getContactById(@PathVariable int id) {
        Contact contact = contactService.getById(id);
        return ResponseEntity.ok(contact);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateContact(@PathVariable int id, @RequestBody Contact contactUpdate) {
        contactService.update(id, contactUpdate);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteContact(@PathVariable int id) {
        contactService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
