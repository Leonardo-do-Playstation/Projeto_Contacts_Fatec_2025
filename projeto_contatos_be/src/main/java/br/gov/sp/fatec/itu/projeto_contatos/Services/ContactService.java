package br.gov.sp.fatec.itu.projeto_contatos.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import br.gov.sp.fatec.itu.projeto_contatos.Entities.Category;
import br.gov.sp.fatec.itu.projeto_contatos.Entities.Contact;
import br.gov.sp.fatec.itu.projeto_contatos.Repositories.ContactRepository;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private CategoryService categoryService;

    public Contact getById(int id) {
        return contactRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Contact not found"));
    }

    public List<Contact> getAll() {
        return contactRepository.findAll();
    }

    public Contact save(Contact contact) {
        return contactRepository.save(contact);
    }

    public void deleteById(int id) {
        Contact contact = getById(id);
        contactRepository.delete(contact);
    }

    public void update(int id, Contact contactUpdate) {
        Contact contact = getById(id);

        if (contactUpdate.getCategory() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Category can not be empty");
        }

        Category category = categoryService.getById(contactUpdate.getCategory().getId());

        contact.setName(contactUpdate.getName());
        contact.setPhone(contactUpdate.getPhone());
        contact.setEmail(contactUpdate.getEmail());
        contact.setAddress(contactUpdate.getAddress());
        contact.setBirthDate(contactUpdate.getBirthDate());
        contact.setFavorite(contactUpdate.isFavorite());
        contact.setCompany(contactUpdate.getCompany());
        contact.setPosition(contactUpdate.getPosition());
        contact.setNotes(contactUpdate.getNotes());
        contact.setCategory(category);

        contactRepository.save(contact);
    }
}
